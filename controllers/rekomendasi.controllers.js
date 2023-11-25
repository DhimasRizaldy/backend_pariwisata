// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
import { PrismaClient } from './prisma/generated/client'
const prisma = new PrismaClient()

const { getPagination } = require("../handler/pagination");

module.exports = {
  // create Rekomendasi wisata
  createRekomendasi: async (req, res, next) => {
    try {
      let userId = parseInt(req.body.userId, 10);
      let wisataId = parseInt(req.body.wisataId, 10);
      let tanggal_vote = new Date().toISOString();

      if (isNaN(wisataId)) {
        return res.status(400).json({
          status: false,
          message: "Parameter wisataId yang anda masukkan bukan angka!",
          data: null
        });
      }

      if (isNaN(userId)) {
        return res.status(400).json({
          status: false,
          message: "Parameter userId yang anda masukkan bukan angka!",
          data: null
        });
      }

      // Check if user has already voted on the given wisata
      const rekomendasiWisataExists = await prisma.rekomendasi.findMany({
        where: {
          user: {
            id: userId
          },
          wisata: {
            id: wisataId
          }
        }
      });

      if (rekomendasiWisataExists.length > 0) {
        return res.status(400).json({
          status: false,
          message: "User telah merekomendasikan wisata ini",
          data: null
        });
      }

      let newRekomendasiWisata = await prisma.rekomendasi.create({
        data: {
          tanggal_vote,
          user: {
            connect: {
              id: userId
            }
          },
          wisata: {
            connect: {
              id: wisataId
            }
          }
        }
      });

      res.status(201).json({
        status: true,
        message: "Data rekomendasi wisata berhasil dibuat!",
        data: newRekomendasiWisata
      });
    } catch (err) {
      next(err);
    }
  },

  // getAll RekomendasiWisata
  getAllRekomendasi: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let RekomendasiWisata = await prisma.rekomendasi.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.rekomendasi.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { RekomendasiWisata }
      });
    } catch (err) {
      next(err);
    }
  },

  // UpdateRekomendasiWisata
  updateRekomendasi: async (req, res, next) => {
    try {
      let { id } = req.params;
      let userId = parseInt(req.body.userId, 10);
      let wisataId = parseInt(req.body.wisataId, 10);
      let tanggal_vote = new Date().toISOString();

      let updateOperation = await prisma.rekomendasi.update({
        where: { id: Number(id) },
        data: {
          tanggal_vote,
          user: { connect: { id: userId } },
          wisata: { connect: { id: wisataId } }
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data rekomendasi wisata berhasil diperbarui!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // deleteRekomendasiWisata
  deleteRekomendasi: async (req, res, next) => {
    try {
      let { id } = req.params;

      let findRekomendasiWisata = await prisma.rekomendasi.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!findRekomendasiWisata) {
        return res.status(404).json({
          status: false,
          message: 'Not Found',
          data: 'Data rekomendasi tidak ditemukan dengan Id ' + id
        });
      }

      let deleteOperation = await prisma.rekomendasi.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data rekomendasi wisata berhasil dihapus!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // search rekomendasi
  searchRekomendasiWisata: async (req, res, next) => {
    try {
      const { keyword } = req.query;

      if (!keyword) {
        return res.status(400).json({ message: 'Harap berikan kata kunci pencarian.' });
      }

      const results = await prisma.wisata.findMany({
        where: {
          OR: [
            {
              nama_wisata: {
                contains: keyword,
                mode: 'insensitive'
              }
            },
            {
              alamat: {
                contains: keyword,
                mode: 'insensitive'
              }
            },
            {
              deskripsi: {
                contains: keyword,
                mode: 'insensitive'
              }
            },
            {
              kategori: {
                nama_kategori: {
                  contains: keyword,
                  mode: 'insensitive'
                }
              }
            },
            {
              daerah: {
                nama_daerah: {
                  contains: keyword,
                  mode: 'insensitive'
                }
              }
            }
          ]
        },
        include: {
          kategori: true,
          daerah: true,
          rekomendasi: { select: { id: true } },
          ulasan: { select: { id: true } },
        },
        orderBy: [
          { rekomendasi: { _count: 'desc' } }
        ]
      });

      if (results.length === 0) {
        return res.status(404).json({
          status: false,
          message: 'Data pencarian tidak ditemukan.',
          data: results,
        });
      }

      res.status(200).json({
        status: true,
        message: 'Data hasil pencarian rekomendasi wisata',
        data: results,
      });
    } catch (err) {
      next(err);
    }
  }
}
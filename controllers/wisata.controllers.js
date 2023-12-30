const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const { PrismaClient } = require('../prisma/generated/client');
// const prisma = new PrismaClient();

const { getPagination } = require("../handler/pagination");
const path = require('path');
const imagekit = require("../libs/imagekit");

module.exports = {
  // create wisata
  createWisata: async (req, res, next) => {
    try {
      let { nama_wisata, alamat, deskripsi, jam_operasi, harga_tiket, urlvideo } = req.body;

      let kategoriId = parseInt(req.body.kategoriId, 10); // Mengonversi ke integer
      let daerahId = parseInt(req.body.daerahId, 10); // Mengonversi ke integer
      let userId = parseInt(req.body.userId, 10);

      let tanggal = new Date().toISOString();

      let url = null;

      const imageFile = req.file;

      if (imageFile) {
        const strFile = imageFile.buffer.toString('base64');

        const { url } = await imagekit.upload({
          fileName: Date.now() + path.extname(imageFile.originalname),
          file: strFile,
        });
      }

      let newWisata = await prisma.wisata.create({
        data: {
          nama_wisata,
          kategoriId,
          daerahId,
          alamat,
          deskripsi,
          jam_operasi,
          harga_tiket,
          tanggal,
          userId,
          urlvideo,
          foto_wisata: url,
        },
      });

      res.status(201).json({
        status: true,
        message: "Data wisata berhasil dibuat!",
        data: newWisata
      })
    } catch (err) {
      next(err);
    }
  },

  // getAll Wisata
  getAllWisata: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let wisata = await prisma.wisata.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.wisata.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { pagination, wisata }
      });
    } catch (err) {
      next(err);
    }
  },

  // get detail Wisata by id
  getDetailWisata: async (req, res, next) => {
    try {
      let { id } = req.params;
      let Wisata = await prisma.wisata.findUnique({
        where: { id: Number(id) },
        include: {
          rekomendasi: true,
          ulasan: true
        }
      });

      if (!Wisata) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          data: 'Data wisata tidak ditemukan dengan Id ' + id
        });
      }

      res.status(200).json({
        status: true,
        message: 'Detail Wisata',
        data: Wisata
      });
    } catch (err) {
      next(err);
    }
  },

  // update Wisata
  updateWisata: async (req, res, next) => {
    try {
      let { id } = req.params;
      let {
        nama_wisata,
        alamat,
        deskripsi,
        jam_operasi,
        harga_tiket,
        urlvideo
      } = req.body;

      let kategoriId = parseInt(req.body.kategoriId, 10);

      let daerahId = parseInt(req.body.daerahId, 10);

      let userId = parseInt(req.body.userId, 10);

      let tanggal = new Date().toISOString();

      let url = null;

      let wisataExist = await prisma.wisata.findUnique({
        where: { id: Number(id) }
      });

      if (!wisataExist) {
        return res.status(400).json({
          status: false,
          message: "Bad Request",
          err: 'Data wisata tidak ditemukan!',
          data: null
        });
      }

      const imageFile = req.file;

      if (imageFile) {
        const strFile = imageFile.buffer.toString('base64');

        const { url: uploadedUrl } = await imagekit.upload({
          fileName: Date.now() + path.extname(imageFile.originalname),
          file: strFile,
        });

        url = uploadedUrl;
      }
      let updateOperation = await prisma.wisata.update({
        where: { id: Number(id) },
        data: {
          nama_wisata,
          kategoriId,
          daerahId,
          alamat,
          deskripsi,
          jam_operasi,
          harga_tiket,
          tanggal,
          userId,
          urlvideo,
          foto_wisata: url
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data wisata berhasi diperbarui!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // deletewisata
  deleteWisata: async (req, res, next) => {
    try {
      let { id } = req.params;

      let findwisata = await prisma.wisata.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!findwisata) {
        return res.status(404).json({
          status: false,
          message: 'Not Found',
          data: 'Data wisata tidak ditemukan dengan Id ' + id
        });
      }

      let deleteOperation = await prisma.wisata.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data wisata berhasil dihapus!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // search wisata
  searchWisata: async (req, res, next) => {
    try {
      const { keyword } = req.query;

      if (!keyword) {
        return res.status(400).json({ message: 'Harap berikan kata kunci pencarian.' });
      }

      const results = await prisma.wisata.findMany({
        where: {
          OR: [{
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
        orderBy: { tanggal: 'desc' },
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
        message: 'Data hasil pencarian Wisata',
        data: results,
      });
    } catch (err) {
      next(err);
    }
  },

  // Kategori wisata
  kategoriWisata: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id); // Ambil ID kategori dari parameter rute

      // Cari kategori wisata berdasarkan ID
      const kategori = await prisma.kategoriWisata.findUnique({
        where: { id: Number(id) },
        include: {
          Wisata: {
            include: {
              daerah: true,
            },
          },
        },
      });

      if (!kategori) {
        return res.status(404).json({ message: 'Kategori wisata tidak ditemukan.' });
      }

      if (kategori.Wisata.length === 0) {
        res.status(200).json({
          status: true,
          message: 'Data wisata kosong pada kategori ' + kategori.nama_kategori,
          data: kategori.Wisata,
        });
      }

      res.status(200).json({
        status: true,
        message: 'Data ' + kategori.nama_kategori,
        data: kategori.Wisata,
      });
    } catch (err) {
      next(err);
    }
  }
};
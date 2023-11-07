const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
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
          message: "The parameter wisataId is not a number!",
          data: null
        });
      }

      if (isNaN(userId)) {
        return res.status(400).json({
          status: false,
          message: "The parameter userId is not a number!",
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
          message: "User has already voted for this wisata",
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
        message: "Rekomendasi Wisata Berhasil Dibuat!",
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
        data: { pagination, RekomendasiWisata }
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
        message: 'Update Rekomendasi wisata successfuly!',
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
          data: 'No Rekomendasi wisata Found With Id ' + id
        });
      }

      let deleteOperation = await prisma.rekomendasi.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Delete Rekomendasi wisata successfully!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
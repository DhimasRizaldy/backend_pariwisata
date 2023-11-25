// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

const { getPagination } = require("../handler/pagination");

module.exports = {
  // create kategori wisata
  createKategori: async (req, res, next) => {
    try {
      let { nama_kategori } = req.body;

      let newkategoriWisata = await prisma.kategoriWisata.create({
        data: {
          nama_kategori,
        },
      });
      res.status(201).json({
        status: true,
        message: "Data daerah sukses dibuat!",
        data: newkategoriWisata
      })
    } catch (err) {
      next(err);
    }
  },

  // getAll kategoriWisata
  getAllKategori: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let kategoriWisata = await prisma.kategoriWisata.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.kategoriWisata.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { kategoriWisata }
      });
    } catch (err) {
      next(err);
    }
  },

  // UpdatekategoriWisata
  updateKategori: async (req, res, next) => {
    try {
      let { id } = req.params;
      let { nama_kategori } = req.body;

      let updateOperation = await prisma.kategoriWisata.update({
        where: { id: Number(id) },
        data: {
          nama_kategori
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data daerah sukses diperbarui!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // deletekategoriWisata
  deleteKategori: async (req, res, next) => {
    try {
      let { id } = req.params;

      let findkategoriWisata = await prisma.kategoriWisata.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!findkategoriWisata) {
        return res.status(404).json({
          status: false,
          message: 'Not Found',
          data: 'Data kategori tidak ditemukan dengan Id ' + id
        });
      }

      let deleteOperation = await prisma.kategoriWisata.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data kategori sukses dihapus!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

const { getPagination } = require("../handler/pagination");

module.exports = {
  // create daerah
  createDaerah: async (req, res, next) => {
    try {
      let { nama_daerah } = req.body;

      let newDaerah = await prisma.daerah.create({
        data: {
          nama_daerah,
        },
      });
      res.status(201).json({
        status: true,
        message: "Data daerah sukses dibuat!",
        data: newDaerah
      })
    } catch (err) {
      next(err);
    }
  },

  // getAll daerah
  getAllDaerah: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let daerah = await prisma.daerah.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.daerah.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { daerah }
      });
    } catch (err) {
      next(err);
    }
  },

  // Updatedaerah
  updateDaerah: async (req, res, next) => {
    try {
      let { id } = req.params;
      let { nama_daerah } = req.body;

      let updateOperation = await prisma.daerah.update({
        where: { id: Number(id) },
        data: {
          nama_daerah
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

  // deleteDaerah
  deleteDaerah: async (req, res, next) => {
    try {
      let { id } = req.params;

      let findDaerah = await prisma.daerah.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!findDaerah) {
        return res.status(404).json({
          status: false,
          message: 'Not Found',
          data: 'Data daerah tidak ditemukan dengan Id ' + id
        });
      }

      let deleteOperation = await prisma.daerah.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data daerah sukses dihapus!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
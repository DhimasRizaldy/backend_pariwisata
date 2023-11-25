const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const { PrismaClient } = require('../prisma/generated/client');
// const prisma = new PrismaClient();

const { getPagination } = require('../handler/pagination');
const path = require('path');
const imagekit = require('../libs/imagekit');

module.exports = {
  // create ulasan 
  createUlasan: async (req, res, next) => {
    try {
      let userId = parseInt(req.body.userId, 10);
      let ulasanId = parseInt(req.body.ulasanId, 10);
      let { judul, isi_ulasan } = req.body;
      let tanggal_ulasan = new Date().toISOString();

      let url = null;

      const imageFile = req.file;

      if (imageFile) {
        const strFile = imageFile.buffer.toString('base64');

        const { url } = await imagekit.upload({
          fileName: Date.now() + path.extname(imageFile.originalname),
          file: strFile,
        });
      }

      let newUlasan = await prisma.ulasan.create({
        data: {
          user: { connect: { id: userId } },
          ulasan: { connect: { id: ulasanId } },
          tanggal_ulasan,
          judul,
          isi_ulasan,
          foto_ulasan: url,
        }
      });

      res.status(201).json({
        status: true,
        message: "Data ulasan berhasil dibuat!",
        data: newUlasan
      })

    } catch (err) {
      next(err);
    }
  },

  // update ulasan
  updateUlasan: async (req, res, next) => {
    try {
      let { id } = req.params;
      let userId = parseInt(req.body.userId, 10);
      let ulasanId = parseInt(req.body.ulasanId, 10);
      let { judul, isi_ulasan } = req.body;
      let tanggal_ulasan = new Date().toISOString();

      let url = null;

      let ulasanExist = await prisma.ulasan.findUnique({
        where: { id: Number(id) }
      });

      if (!ulasanExist) {
        return res.status(400).json({
          status: false,
          message: "Bad Request",
          err: 'Data ulasan tidak ditemukan!',
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

      let updateUlasan = await prisma.ulasan.update({
        where: { id: Number(id) },
        data: {
          user: { connect: { id: userId } },
          ulasan: { connect: { id: ulasanId } },
          tanggal_ulasan,
          judul,
          isi_ulasan,
          foto_ulasan: url,
        }
      });

      return res.status(200).json({
        status: true,
        message: 'Data ulasan berhasil diperbarui!',
        err: null,
        data: { updateUlasan }
      });

    } catch (err) {
      next(err);
    }
  },

  // getAll Ulasan
  getAllUlasan: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let ulasan = await prisma.ulasan.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.ulasan.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { ulasan }
      });
    } catch (err) {
      next(err);
    }
  },

  // get detail ulasan by id
  getDetailUlasan: async (req, res, next) => {
    try {
      let { id } = req.params;
      let ulasan = await prisma.ulasan.findUnique({
        where: { id: Number(id) },
        include: {
          ulasan: true
        }
      });

      if (!ulasan) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          data: 'Data ulasan tidak ditemukan dengan Id ' + id
        });
      }

      res.status(200).json({
        status: true,
        message: 'Detail Ulasan',
        data: ulasan
      });
    } catch (err) {
      next(err);
    }
  },

  // deleteulasan
  deleteUlasan: async (req, res, next) => {
    try {
      let { id } = req.params;

      let findulasan = await prisma.ulasan.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!findulasan) {
        return res.status(404).json({
          status: false,
          message: 'Not Found',
          data: 'Data ulasan tidak ditemukan dengan Id ' + id
        });
      }

      let deleteOperation = await prisma.ulasan.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data ulasan berhasil dihapus!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
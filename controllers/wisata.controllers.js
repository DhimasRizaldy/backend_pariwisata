const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { getPagination } = require("../handler/pagination");
const path = require('path');
const imagekit = require("../libs/imagekit");

module.exports = {
  // create wisata
  createWisata: async (req, res, next) => {
    try {
      let { nama_wisata, alamat, deskripsi, jam_operasi, harga_tiket } = req.body;

      let kategoriId = parseInt(req.body.kategoriId, 10); // Mengonversi ke integer
      let daerahId = parseInt(req.body.daerahId, 10);   // Mengonversi ke integer
      let userId = parseInt(req.body.userId, 10);   // Mengonversi ke integer

      const imageFile = req.file;

      if (!imageFile) {
        return res.status(400).json({
          status: false,
          message: 'Image file not found',
        });
      }

      const strFile = imageFile.buffer.toString('base64');

      // Mengonversi tanggal ke format ISO-8601
      let tanggal = new Date().toISOString(); // Menggunakan tanggal dan waktu saat ini

      const { url } = await imagekit.upload({
        fileName: Date.now() + path.extname(imageFile.originalname),
        file: strFile,
      });
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
          foto_wisata: url,
        },
      });

      res.status(201).json({
        status: true,
        message: "Create Wisata Successfuly!",
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
      let Wisata = await prisma.wisata.findUnique({ where: { id: Number(id) } });

      if (!Wisata) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          data: 'No Wisata Found With Id ' + id
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
      let { nama_wisata, alamat, deskripsi, jam_operasi, harga_tiket } = req.body;

      let kategoriId = parseInt(req.body.kategoriId, 10); // Mengonversi ke integer
      let daerahId = parseInt(req.body.daerahId, 10);   // Mengonversi ke integer
      let userId = parseInt(req.body.userId, 10);   // Mengonversi ke integer

      // Mengonversi tanggal ke format ISO-8601
      let tanggal = new Date().toISOString(); // Menggunakan tanggal dan waktu saat ini

      const imageFile = req.file;

      if (!imageFile) {
        return res.status(400).json({
          status: false,
          message: 'Image file not found',
        });
      }

      const strFile = imageFile.buffer.toString('base64');

      const { url } = await imagekit.upload({
        fileName: Date.now() + path.extname(imageFile.originalname),
        file: strFile,
      });

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
          foto_wisata: url
        }
      });

      res.status(200).json({
        status: true,
        message: 'Updated Wisata Succesfully!',
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
          data: 'No Wisata Found With Id ' + id
        });
      }

      let deleteOperation = await prisma.wisata.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        status: true,
        message: 'Delete Wisata successfully!',
        data: deleteOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
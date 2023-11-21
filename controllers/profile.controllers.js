require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const imagekit = require('../libs/imagekit');
const path = require('path');


module.exports = {
  // update profile
  updateProfile: async (req, res, next) => {
    try {
      let { id } = req.params;
      let { userId, nama, jenis_kelamin, alamat } = req.body;

      userId = Number(userId);

      let url = null;

      let profileExist = await prisma.profile.findUnique({
        where: { id: Number(id) }
      });

      if (!profileExist) {
        return res.status(400).json({
          status: false,
          message: "Bad Request",
          err: 'Profile tidak ditemukan!',
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

      let updateProfile = await prisma.profile.update({
        where: { id: Number(id) },
        data: {
          user: { connect: { id: userId } },
          nama,
          jenis_kelamin,
          alamat,
          foto_profile: url
        }
      });

      return res.status(200).json({
        status: true,
        message: 'Data profile sukses diperbarui!',
        err: null,
        data: { updateProfile }
      });

    } catch (err) {
      next(err);
    }
  },

  // delete image
  deleteImage: async (req, res, next) => {
    try {
      let { id } = req.params;

      let updateOperation = await prisma.profile.update({
        where: { id: Number(id) },
        data: {
          image: null, // Menghapus gambar dengan mengatur nilainya ke null
        }
      });

      res.status(200).json({
        status: true,
        message: 'Data profile sukses dihapus!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  },

  // delete image
  deleteImage: async (req, res, next) => {
    try {
      let { id } = req.params;

      let updateOperation = await prisma.profile.update({
        where: { id: Number(id) },
        data: {
          foto_profile: null, // Menghapus gambar dengan mengatur nilainya ke null
        }
      });

      res.status(200).json({
        status: true,
        message: 'Foto profile sukses dihapus!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
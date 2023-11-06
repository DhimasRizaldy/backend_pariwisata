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

      let strFile = req.file.buffer.toString('base64');

      let profileExist = await prisma.profile.findUnique({
        where: { id: Number(id) }
      });

      if (!profileExist) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Profile not found!',
          data: null
        });
      }

      let userIdExist = await prisma.user.findUnique({
        where: { id: Number(id) }
      });
      if (!userIdExist) {
        return res.status(400).json({
          status: false,
          message: "Bad Request",
          err: 'userId not found!',
          data: null
        });
      }

      // simpan url 'foto_profile' lama
      const file_id = profileExist.foto_profile;

      // Hapus foto lama dari Imagekit jika ada
      if (file_id) {
        imagekit.deleteFile("file_id", function (error, result) {
          if (error) {
            console.log('Gagal menghapus foto lama:', error);
          } else {
            console.log('Berhasil menghapus foto lama:', result);
          }
        });
      }

      let { url } = await imagekit.upload({
        fileName: Date.now() + path.extname(req.file.originalname),
        file: strFile
      });

      let updateProfile = await prisma.profile.update({
        where: { id: Number(id) },
        data: {
          userId,
          nama,
          jenis_kelamin,
          alamat,
          foto_profile: url
        }
      });

      return res.status(200).json({
        status: true,
        message: 'Profile Updated!',
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
        message: 'Delete Image Successfuly!',
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
        message: 'Delete Image Successfuly!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
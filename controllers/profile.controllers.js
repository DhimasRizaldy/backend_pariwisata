require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imagekit = require('../libs/imagekit');
const path = require('path');


module.exports = {
  // update profile
  updateProfile: async (req, res, next) => {
    try {
      const id = req.user.id;

      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Bad Request",
          err: 'ID profile tidak valid!',
          data: null
        });
      }

      let { userId, nama, jenis_kelamin, alamat } = req.body;
      userId = Number(userId);

      let url = null;

      const profileExist = await prisma.profile.findUnique({
        where: { id: id }
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

      const updatedProfile = await prisma.profile.update({
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
        data: { updatedProfile }
      });

    } catch (err) {
      next(err);
    }
  },

  // delete image
  deleteImage: async (req, res, next) => {
    try {
      const { id } = req.profile;

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
      const { id } = req.profile;

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
  },

  getProfile: async (req, res, next) => {
    const { id } = req.user;
    try {
      let user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
          err: null,
          data: null,
        });
      }

      let profile = await prisma.profile.findUnique({
        where: {
          userId: id,
        },
      });

      if (!profile) {
        return res.status(404).json({
          success: false,
          message: 'Profile not found',
          err: null,
          data: null,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Successfully get user profile',
        err: null,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }
}
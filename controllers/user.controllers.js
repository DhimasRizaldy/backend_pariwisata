const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const { PrismaClient } = require('../prisma/generated/client');
// const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;
const { getPagination } = require('../handler/pagination')

module.exports = {
  // register
  register: async (req, res, next) => {
    try {
      let { email, password, password_confirmation } = req.body;

      let role = 'user';

      if (password != password_confirmation) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Pastikan pasword dan konfirmasi_password cocok!',
          data: null
        });
      }

      let userExist = await prisma.user.findUnique({ where: { email: email } });
      if (userExist) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Email pengguna telah didaftarkan',
          data: null
        });
      }

      let encryptedPassword = await bcrypt.hash(password, 10);

      let user = await prisma.user.create({
        data: {
          email,
          password: encryptedPassword,
          role
        }
      });

      const userId = user.id;

      await prisma.profile.create({
        data: {
          userId: userId,
          nama: null,
          jenis_kelamin: null,
          alamat: null,
          foto_profile: null
        }
      });

      return res.status(201).json({
        status: true,
        message: 'Data user berhasil dibuat!',
        err: null,
        data: { user }
      });
    } catch (err) {
      next(err);
    }
  },

  // login
  login: async (req, res, next) => {
    try {
      let { email, password } = req.body;

      let user = await prisma.user.findUnique({
        where: { email }
      });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Email atau Password tidak valid!',
          data: null
        });
      }

      let isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Email atau Password tidak valid!',
          data: null
        });
      }

      let token = jwt.sign({ id: user.id }, JWT_SECRET_KEY);

      return res.status(200).json({
        status: true,
        message: 'OK',
        err: null,
        data: { user, token }
      });
    } catch (err) {
      next(err);

    }
  },

  // get token jwt
  whoami: (req, res, next) => {
    return res.status(200).json({
      status: true,
      message: 'OK',
      err: null,
      data: {
        user: req.user,
        profile: req.profile
      }
    });
  },

  // create user
  createUser: async (req, res, next) => {
    try {
      let { email, password } = req.body;

      let role = 'admin';

      let userExist = await prisma.user.findUnique({ where: { email: email } });
      if (userExist) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Email pengguna telah didaftarkan!',
          data: null
        });
      }

      let encryptedPassword = await bcrypt.hash(password, 10);

      let user = await prisma.user.create({
        data: {
          email,
          password: encryptedPassword,
          role
        }
      });

      const userId = user.id;

      await prisma.profile.create({
        data: {
          userId: userId,
          nama: null,
          jenis_kelamin: null,
          alamat: null,
          foto_profile: null
        }
      });

      return res.status(201).json({
        status: true,
        message: 'Data admin berhasil dibuat!',
        err: null,
        data: { user }
      });
    } catch (err) {
      next(err);
    }
  },

  // getAllUser
  getAllUser: async (req, res, next) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = Number(limit);
      page = Number(page);

      let user = await prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const { _count } = await prisma.user.aggregate({
        _count: { id: true }
      });

      let pagination = getPagination(req, _count.id, page, limit);

      res.status(201).json({
        status: true,
        message: 'OK',
        data: { user }
      });

    } catch (err) {
      next(err);
    }
  },

  // getDetailUser
  getDetailUser: async (req, res, next) => {
    try {
      let { id } = req.params;
      let user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: {
          profile: true,
          wisata: true,
          rekomendasi: true,
          ulasan: true
        }
      });

      if (!user) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          data: 'Data user tidak ditemukan dengan Id ' + id
        });
      }

      res.status(200).json({
        status: true,
        message: 'Detail User',
        data: user
      });
    } catch (err) {
      next(err);
    }
  },

  // update User
  updateUser: async (req, res, next) => {
    try {
      let { id } = req.params;
      let { email, password } = req.body;
      let role = 'user';

      if (!password) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request',
          err: 'Password harus diisi!',
          data: null
        });
      }
      let encryptedPassword = await bcrypt.hash(password, 10);

      let updateOperation = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          email,
          password: encryptedPassword,
          role: role

        }
      });

      res.status(200).json({
        status: true,
        message: 'Data user berhasil diperbarui!',
        data: updateOperation
      });
    } catch (err) {
      next(err);
    }
  }
}
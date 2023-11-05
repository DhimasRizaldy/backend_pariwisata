const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, JWT_SECRET_KEY } = process.env;

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
  },
  async function (accessToken, refreshToken, profile, done) {
    try {
      // Cek apakah pengguna sudah ada berdasarkan email
      let user = await prisma.user.findUnique({
        where: { email: profile.emails[0].value },
      });

      if (!user) {
        // Jika pengguna belum ada, buat pengguna baru dengan peran 'USER'
        user = await prisma.user.create({
          data: {
            email: profile.emails[0].value,
            role: 'user', // Atur peran secara otomatis sebagai 'USER'
            googleid: profile.id,
          },
        });
      } else {
        // Jika pengguna sudah ada, update data Google ID jika belum ada
        if (!user.googleid) {
          user = await prisma.user.update({
            where: { id: user.id },
            data: {
              googleid: profile.id,
            },
          });
        }
      }

      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));

// Menggunakan jwt untuk membuat token
const googleOauth2 = (req, res) => {
  let token = jwt.sign({ id: req.user.id }, JWT_SECRET_KEY);

  return res.status(200).json({
    status: true,
    message: 'OK',
    err: null,
    data: { user: req.user, token },
  });
}

module.exports = {
  passport,
  googleOauth2
};

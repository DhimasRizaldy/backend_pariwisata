const router = require('express').Router();

//  import middleware auth
const { restrict } = require('../middlewares/auth.middlewares');

// import google_oauth2
const { passport, googleOauth2 } = require('../libs/passport');

// import multer
const { image } = require('../libs/multer')


// import user controllers
const { register, login, whoami, createUser, getAllUser, getDetailUser, updateUser } = require('../controllers/user.controllers');

// import profile controllers
const { updateProfile, deleteImage } = require('../controllers/profile.controllers')
// import wisata controllers

// import daerah controllers

// import kategoriwisata controllers

// import rekomendasi controllers

// import ulasan controllers


// import multer


// router main url
router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: " Welcome to learn Restful APIs - Challange Chapter 4",
    data: null,
  });
});

// Router url register & login
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/whoami', restrict, whoami);

// Router register & login google ouath
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/api/v1/auth/google' }), googleOauth2);

// Router url user
router.post('/user/', createUser);
router.get('/user/', getAllUser);
router.get('/user/:id', getDetailUser);
router.put('/user/:id', updateUser);

// Router url profile
router.put('/profile/:id', image.single('foto_profile'), updateProfile);
router.put('/profileImage/:id', deleteImage);
// Router url wisata

// Router url kategoriwisata

// Router url daerah

// Router url rekomendasi

// Router url ulasan

module.exports = router;
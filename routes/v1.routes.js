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
const { createWisata, getAllWisata, getDetailWisata, updateWisata, deleteWisata, searchWisata, kategoriWisata } = require("../controllers/wisata.controllers");


// import daerah controllers
const { createDaerah, getAllDaerah, updateDaerah, deleteDaerah } = require("../controllers/daerah.controllers");

// import kategoriwisata controllers
const { createKategori, getAllKategori, updateKategori, deleteKategori } = require("../controllers/kategoriwisata.controllers");

// import rekomendasi controllers
const { createRekomendasi, getAllRekomendasi, updateRekomendasi, deleteRekomendasi, searchRekomendasiWisata } = require("../controllers/rekomendasi.controllers");

// import ulasan controllers
const { createUlasan, updateUlasan, getAllUlasan, getDetailUlasan, deleteUlasan } = require("../controllers/ulasan.controllers");



// import multer


// router main url
router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: " Welcome to learn Restful APIs - Api Backend Pariwisata",
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
router.post("/wisata", image.single('foto_wisata'), createWisata);
router.get("/wisata", getAllWisata);
router.get("/wisata/:id", getDetailWisata);
router.put("/wisata/:id", image.single('foto_wisata'), updateWisata);
router.delete("/wisata/:id", deleteWisata);
router.get("/search_wisata", searchWisata);
router.get("/kategori_wisata/:id", kategoriWisata);

// Router url kategoriwisata
router.get("/kategoriWisata", getAllKategori);
router.post("/kategoriWisata", createKategori);
router.put("/kategoriWisata/:id", updateKategori);
router.delete("/kategoriWisata/:id", deleteKategori);

// Router url daerah
router.get("/daerah", getAllDaerah);
router.post("/daerah", createDaerah);
router.put("/daerah/:id", updateDaerah);
router.delete("/daerah/:id", deleteDaerah);

// Router url rekomendasi
router.post("/rekomendasi", createRekomendasi);
router.get("/rekomendasi", getAllRekomendasi);
router.put("/rekomendasi/:id", updateRekomendasi);
router.delete("/rekomendasi/:id", deleteRekomendasi);
router.get("/search_rekomendasi_wisata", searchRekomendasiWisata);

// Router url ulasan
router.post("/ulasan", image.single('foto_ulasan'), createUlasan);
router.put('/ulasan/:id', image.single('foto_ulasan'), updateUlasan);
router.get('/ulasan/:id', getDetailUlasan);
router.delete('/ulasan/:id', deleteUlasan);
router.get('/ulasan', getAllUlasan);

module.exports = router;
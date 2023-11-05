const router = require('express').Router();

const { restrict } = require('../middlewares/auth.middlewares');
// import user controllers
const { register, login, whoami } = require('../controllers/user.controllers');

// router main url
router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: " Welcome to learn Restful APIs - Challange Chapter 4",
    data: null,
  });
});

// Router url register & login
router.post('/register', register);
router.post('/login', login);
router.get('/whoami', restrict, whoami);

module.exports = router;
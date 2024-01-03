module.exports = {
  verifyAdmin: (req, res, next) => {
    const { role } = req.user;

    if (role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
        err: 'Anda bukan admin',
        data: null,
      });
    }

    next();
  }
}
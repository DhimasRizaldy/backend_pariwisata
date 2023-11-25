require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT } = process.env;
const v1router = require('./routes/v1.routes');
const vercel = require('@vercel/node');


// middlewares
app.use(morgan('dev'));
app.use(express.json());

// router url main
app.use("/api/v1", v1router);
app.get('/', (req, res) => {
  return res.json({
    status: true,
    message: "Welcome to Apis - Pariwisata",
    error: null,
    data: null,
  });
});

// error handling 404
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'Not Found',
    data: null
  });
});

// error handling 500
app.use((err, req, res, next) => {
  res.status(500).json({
    status: false,
    message: 'Internal Server Error',
    data: err
  });
});

// running port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

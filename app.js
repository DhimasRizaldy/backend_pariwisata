require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT } = process.env;
const v1router = require('./routes/v1.routes');

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// 
app.use("/api/v1", v1router);

// // error handling 404
// app.use((req, res, next) => {
//   res.status(404).json({
//     status: false,
//     message: 'Not Found',
//     data: null
//   });
// });

// // error handling 500
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     status: false,
//     message: 'Internal Server Error',
//     data: err.message
//   });
// });

// running port 3000
app.listen(PORT, () => console.log(`Server Listen ${PORT}`));

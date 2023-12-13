require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT } = process.env;
const v1router = require('./routes/v1.routes');
const cors = require('cors');
const yaml = require('yaml');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');


app.use(
  cors({
    origin: '*',
  })
);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const file = fs.readFileSync(path.join(__dirname, './docs.yaml'), 'utf8');
const swaggerDocument = yaml.parse(file);
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: ['https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js', 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js'],
    customSiteTitle: 'Backend Pariwisata API Documentation 🚀',
  })
);

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

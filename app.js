require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const v1router = require('./routes/v1.routes');
const cors = require('cors');
const yaml = require('yaml');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const { serverError, notFound } = require('./middlewares/errorHandling');


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
// error handling 404
app.use(notFound);
// error handling 500
app.use(serverError);

// running port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

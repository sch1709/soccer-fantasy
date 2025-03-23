const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const connectDB = require('./db/connections');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});


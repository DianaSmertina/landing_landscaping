const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var whitelistDomain = [
  "http://localhost:9000",
  "https://sweet-kheer-626c63.netlify.app",
];

const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.use(
  cors({
      credentials: true,
      origin: function (origin, callback) {
          const originIsWhitelisted = whitelistDomain.indexOf(origin) !== -1;
          callback(null, originIsWhitelisted);
      },
  })
);

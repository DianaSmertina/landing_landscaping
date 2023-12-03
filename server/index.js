const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var whitelistDomain = [
  "http://localhost:9000",
  "https://cheery-chebakia-015361.netlify.app",
];

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
      credentials: true,
      origin: function (origin, callback) {
          const originIsWhitelisted = whitelistDomain.indexOf(origin) !== -1;
          callback(null, originIsWhitelisted);
      },
  })
);

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD,
  }
});

const mailer = message => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

app.post('/submit', async (req, res) => {
  try {
    const { name, tel, area, city, comments } = req.body;
    const message = {
      from: `New application <${process.env.USER_MAIL}>`,
      to: process.env.MAIL_TO,
      subject: 'Новая заявка!',
      text: `
        Имя: ${name}
        Телефон: ${tel}
        Площадь участка: ${area}
        Населенный пункт: ${city}
        Комментарий: ${comments}
      `,
    };

    const mailerResult = await mailer(message);
    return res.status(200).json(mailerResult);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Извините, произошла ошибка на сервере, пожалуйста, свяжитесь с нами в WhatsApp' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const { Router } = require('express');
require('express-async-errors')
const mailRouter = Router();
const nodemailer = require("nodemailer");

mailRouter.post('/', async (req, res) => {
  const { name, phone, address, cart, sum } = req.body
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'burgerim.od@gmail.com', // generated ethereal user
      pass: 'esCGQItassU9', // generated ethereal password
    },
  });

  const newCart = cart.map(item => `<h3>${item.title} кол-во ${item.count} ${item.summ}грн</h3>`)

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"burgerim.od@gmail.com',
    to: "burgerim.od@gmail.com",
    subject: "Новый заказ",
    text: `Name: ${name} Phone: ${phone}`,
    html: `
    <h2>Имя: ${name}</h2>
    <h3>Номер заказа: ${Date.now()}</h3>
    <a href="tel:${req.body.phone}">Телефон: ${req.body.phone} </a>
    <h3>Адрес: ${address}</h3>
    <h2>
     Корзина: ${newCart}
    </h2>
    <h2>
      Сумма: ${sum}грн
    </h2>
    `
  });

  res.status(201).send('Mail send');
})


module.exports = mailRouter;
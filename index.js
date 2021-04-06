const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('express-async-errors');
const apiRouter = require('./routes')
const https = require('https')
const http = require('http')
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/.well-known/pki-validation/4974C90CE672BEEDAF65FD9993375506.txt', async (req, res) => {
  res.sendFile(path.join(__dirname, '.well-known', 'pki-validation', '4974C90CE672BEEDAF65FD9993375506.txt'))
})

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/index.html'))
  })
}

app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ error: err.message })
});

const PORT = process.env.PORT || 5002


async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    http.createServer(app).listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`)
    });
  }
  catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
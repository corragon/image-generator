const express = require('express');
const config = require('./config');
const Router = require('express').Router;

const app  = express();
const router = new Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the image generator!');
});

app.use(router);

app.listen(config.server.port, () => {
  console.log(`image generator running at http://localhost:${config.server.port}`);
});
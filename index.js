const express = require('express');
const config = require('./config');
const Router = require('express').Router;
const path = require('path');

const app  = express();
const router = new Router();

app.use(express.static(__dirname));

router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(router);

app.listen(config.server.port, () => {
  console.log(`image generator running at http://localhost:${config.server.port}`);
});
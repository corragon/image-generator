const express = require('express');
const Router = require('express').Router;
const path = require('path');
const config = require('./config');
const image = require('./image');

const app  = express();
const router = new Router();

app.use(express.static(__dirname));

router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

function imageHandler (req, res, next) {
  let {width=100, height=100, color=0x663366ff} = req.imageOptions;
  let file = image({
    width: Number(width),
    height: Number(height),
    backgroundColor: Number(color),
  });
  setTimeout(() => {
    res.sendFile(path.join(__dirname + '/' + file));
  }, 50);
}

router.route('/image')
  .get(
    (req, res, next) => {
      req.imageOptions = req.query;
      next();
    },
    imageHandler
  );

router.route('/:width/:height/:color')
  .get(
    (req, res, next) => {
      req.imageOptions = req.params;
      next();
    },
    imageHandler
  );

app.use(router);

app.listen(config.server.port, () => {
  console.log(`image generator running at http://localhost:${config.server.port}`);
});


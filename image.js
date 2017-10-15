const Jimp = require('jimp');

var image = new Jimp(256, 256, 0x000000FF, function (err, image) {
    // this image is 256 x 256, every pixel is set to 0x00000000
});

/*for (let i = 20; i < 30; i++) {
  for (let j = 20; j < 30; j++) {
    image.setAt(i, j, { red:255, green:0, blue:0, alpha:255 });
  }
}*/

image.write('cow.png', function (err, image) {
  if (err) throw err;
  console.log('Written to the file');
});
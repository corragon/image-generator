const PNGImage = require('pngjs-image');


let image = PNGImage.createImage(100, 300);

for (let i = 20; i < 30; i++) {
  for (let j = 20; j < 30; j++) {
    image.setAt(i, j, { red:255, green:0, blue:0, alpha:255 });
  }
}

image.writeImage('chicken.png', function (err) {
  if (err) throw err;
  console.log('Written to the file');
});
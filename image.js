const Jimp = require('jimp');

function generateImage(imageParams)
{
	var image = new Jimp(imageParams.width, imageParams.height, imageParams.backgroundColor, function (err, image) {});

	image.write('cow.png', function (err, image) {
		if (err) throw err;
		console.log('Written to the file');
	});
}

module.exports = generateImage;
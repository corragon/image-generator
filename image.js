const Jimp = require('jimp');

function generateImage(imageParams)
{
	var image = new Jimp(imageParams.width, imageParams.height, imageParams.backgroundColor);

	image.write('cow.png', function (err, image) {
		if (err) throw err;
		console.log('Written to the file');
	});
	
	return 'cow.png';
}

var ip = {};
ip.width = 500;
ip.height = 300;
ip.backgroundColor = 0xFF8040FF;

generateImage(ip);

module.exports = generateImage;
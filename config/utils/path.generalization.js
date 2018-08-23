const Public = require('../public.options');

var {
	assetsFolder,
	cssFolder,
	jsFolder,
	imageFolder,
	fontFolder,
	docFolder,
	audioFolder,
	videoFolder,
	favIcon
} = Public.options;

//Folder name generalization
assetsFolder = assetsFolder.match(/\w+/g) ? assetsFolder + '/' : '';
cssFolder = cssFolder.match(/\w+/g) ? cssFolder : 'css/';
jsFolder = jsFolder.match(/\w+/g) ? jsFolder : 'js/';
imageFolder = imageFolder.match(/\w+/g) ? imageFolder : 'images/';
fontFolder = fontFolder.match(/\w+/g) ? fontFolder : 'fonts/';
docFolder = docFolder.match(/\w+/g) ? docFolder : 'docs/';
audioFolder = audioFolder.match(/\w+/g) ? audioFolder : 'audios/';
videoFolder = videoFolder.match(/\w+/g) ? videoFolder : 'videos/';

favFolder = favIcon.folderName.match(/\w+/g) ? favIcon.folderName : 'favicons/';

module.exports = {
	assetsFolder,
	cssFolder,
	jsFolder,
	imageFolder,
	fontFolder,
	docFolder,
	audioFolder,
	videoFolder,
	favFolder
};

const { path, src, dist } = require('./utils/paths');
const { mode, target } = require('./utils/modeTarget');
const { MiniCssExtractPlugin } = require('./plugins.config');
const Public = require('./public.options');
var { customAttributes, base64Threshold, htmlMinify } = Public.options;

var {
	assetsFolder,
	cssFolder,
	fontFolder,
	imageFolder,
	jsFolder,
	docFolder,
	audioFolder,
	videoFolder
} = require('./utils/path.generalization');

var raw_attributes = `${[
	'img:src',
	'image:href',
	':data-src',
	'data-img',
	'data-image',
	'audio:src',
	'video:src',
	'source:src',
	'video:poster'
].join()}, ${customAttributes.join()}`;

let Rules = [];
Rules.push(
	{
		test: /\.(css|sass|scss)$/,
		use: [
			(function() {
				if (mode === 'production') {
					return {
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: ''
						}
					};
				} else {
					return 'style-loader';
				}
			})(),
			'css-loader',
			'fast-sass-loader',
			'postcss-loader'
		]
	},
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components)/,
		use: 'babel-loader'
	},
	{
		test: /\.(jpe?g|png|gif)$/,
		use: `url-loader?limit=${
			base64Threshold && base64Threshold.toString().match(/\d+/).length ? base64Threshold : 1000
		}&outputPath=${assetsFolder}${imageFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.(svg)$/,
		exclude: [path.resolve(src.client, `/${assetsFolder}${fontFolder}`)],
		use: `file-loader?emitFile=${
			target === 'server' ? false : true
		}&outputPath=${assetsFolder}${imageFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.(ttf|otf|eot|woff|woff2)$/,
		use: `file-loader?emitFile=${
			target === 'server' ? false : true
		}&outputPath=${assetsFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.(txt|pdf|doc|docx|xls|xlsx|ppt|pptx)$/,
		use: `file-loader?emitFile=${
			target === 'server' ? false : true
		}&outputPath=${assetsFolder}${docFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.(mp3|ogg|wav)$/,
		use: `file-loader?emitFile=${
			target === 'server' ? false : true
		}&outputPath=${assetsFolder}${audioFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.(mp4|ogv|webm)$/,
		use: `file-loader?emitFile=${
			target === 'server' ? false : true
		}&outputPath=${assetsFolder}${videoFolder}&name=[name].[ext]&useRelativePath=true`
	},
	{
		test: /\.html?$/,
		use: [
			{
				loader: 'html-loader',
				options: {
					interpolate: true,
					attrs: raw_attributes.split(','),
					collapseWhitespace: htmlMinify.collapseWhitespace,
					preserveLineBreaks: htmlMinify.preserveLineBreaks,
					removeAttributeQuotes: htmlMinify.removeAttributeQuotes,
					removeComments: htmlMinify.removeComments,
					removeEmptyAttributes: htmlMinify.removeEmptyAttributes,
					removeEmptyElements: htmlMinify.removeEmptyElements
				}
			}
		]
	}
);

module.exports = Rules;

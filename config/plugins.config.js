const { path, src, dist } = require('./utils/paths');
var { favIcon, copyPaste, splitChunks, sourceMap } = require('./public.options').options;

var { assetsFolder, cssFolder, imageFolder, jsFolder } = require('./utils/path.generalization');

const { mode, target } = require('./utils/modeTarget');

const webpack = require('webpack');

const progressPlugin = webpack.ProgressPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');

const FixAssetPathInCssPlugin = require('./utils/FixAssetPathInCssPlugin');

const Plugins = [];
const Optimization = Object.create(null);

Plugins.push(
	new progressPlugin(),

	(function() {
		if (mode === 'production') {
			return new MiniCssExtractPlugin({
				filename: `${assetsFolder + cssFolder}/[name].css`
			});
		} else {
			return () => {};
		}
	})(),
	new FixAssetPathInCssPlugin(),
	(function() {
		if (target === 'client') {
			return new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				_: 'lodash'
			});
		} else {
			return () => {};
		}
	})(),

	(function() {
		if (mode === 'production' && target === 'client') {
			const ImageminPlugin = require('imagemin-webpack-plugin').default;
			return new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i });
		} else {
			return () => {};
		}
	})(),
	(function() {
		if ((mode === 'production') & (target === 'client')) {
			const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
			return new FaviconsWebpackPlugin({
				// Your source logo
				logo: path.resolve(src.client, 'favicon.png'),
				// The prefix for all image files (might be a folder or a name)
				prefix: favIcon.folderName.match(/\w+/g)
					? `${assetsFolder}${favIcon.folderName}/`
					: `${assetsFolder}favicons/`,
				// Emit all stats of the generated icons
				emitStats: false,
				// The name of the json containing all favicon information
				statsFilename: 'iconstats.json',
				// Generate a cache file with control hashes and
				// don't rebuild the favicons until those hashes change
				persistentCache: true,
				// Inject the html into the html-webpack-plugin
				inject: favIcon.inject,
				// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
				background: favIcon.background,
				// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
				title: favIcon.title,

				// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					opengraph: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			});
		} else {
			return () => {};
		}
	})(),
	(function() {
		if (mode === 'production' || target === 'server') {
			const CleanWebpackPlugin = require('clean-webpack-plugin');
			return new CleanWebpackPlugin([target === 'server' ? dist.server : dist.client], {
				root: dist.root,
				allowExternal: false,
				beforeEmit: false
			});
		} else {
			return () => {};
		}
	})(),
	(function() {
		if (mode === 'production' && target === 'client' && copyPaste[0].from.length) {
			return CopyWebpackPlugin(copyPaste);
		} else {
			return () => {};
		}
	})(),
	(function() {
		if (mode === 'production' && target === 'server') {
			return CopyWebpackPlugin([
				{
					from: path.resolve(dist.client, `${assetsFolder}${cssFolder}`),
					to: path.resolve(dist.server, `${assetsFolder}${cssFolder}`)
				},
				{
					from: path.resolve(dist.client, `${assetsFolder}${imageFolder}`),
					to: path.resolve(dist.server, `${assetsFolder}${imageFolder}`)
				},
				{
					from: path.resolve(dist.client, `${assetsFolder}${jsFolder}`),
					to: path.resolve(dist.server, `${assetsFolder}${jsFolder}`)
				},
				{
					from: path.resolve(dist.client, `${assetsFolder}${favIcon.folderName}`),
					to: path.resolve(dist.server, `${assetsFolder}${favIcon.folderName}`)
				}
			]);
		} else {
			return () => {};
		}
	})(),

	function() {
		/*if(Public.options.sourceMap){
			const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
			return new BundleAnalyzerPlugin({analyzerPort: 1025});
		}else{
			return ()=>{};
		}*/
	}
);

(function() {
	splitChunks.enable
		? (Optimization.splitChunks = {
				name: splitChunks.name.match(/\w+/g) ? splitChunks.name : true,
				chunks: 'all'
		  })
		: null;
})();

Optimization.minimizer = [
	(function() {
		if (mode === 'production' && target === 'client') {
			const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

			return new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: sourceMap ? true : false // set to true if you want JS source maps
			});
		} else {
			return () => {};
		}
	})(),
	(function() {
		if (mode === 'production' && target === 'client') {
			return new OptimizeCSSAssetsPlugin({
				cssProcessor: require('cssnano'),
				cssProcessorOptions: { discardComments: { removeAll: true }, zindex: false },
				canPrint: true
			});
		} else {
			return () => {};
		}
	})()
];
module.exports = { Plugins, Optimization, MiniCssExtractPlugin, WebpackNodeExternals };

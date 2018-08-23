const { path, src, dist } = require('./utils/paths');
const { mode, target } = require('./utils/modeTarget');
const rules = require('./rules.config');
const { Plugins, Optimization, WebpackNodeExternals } = require('./plugins.config');
const { assetsFolder, cssFolder, jsFolder } = require('./utils/path.generalization');
const Public = require('./public.options');

var { entries, splitChunks, supportOldBrowsers, server } = Public.options;

const createEntries = require('./utils/multipleEntryPoints');

var { entry, htmls } = new createEntries({
	customEntries: entries,
	commonsChunk: splitChunks,
	supportOldBrowsers: supportOldBrowsers
}).start_building();

const config = {
	entry,
	stats: {
		colors: true
	},
	output: {
		filename:
			mode === 'production' && target === 'client' ? `${assetsFolder}${jsFolder}/[name].js` : 'js/[name].js',
		path: mode === 'production' && target === 'client' ? dist.client : dist.server,
		publicPath: mode === 'production' && target === 'client' ? '' : ''
	},
	/*resolveLoader: {
		alias: {
			'fixAssetPathInCss-loader': require.resolve('./utils/fixAssetPathInCss-loader.js')
		}
	},*/
	mode,
	module: {
		noParse: /jquery/,
		rules
	},
	target: target === 'server' && mode === 'production' ? 'node' : 'web',
	resolve: {
		modules: ['node_modules', path.resolve(src.client)]
	},
	node: {
		// Mock Node.js modules that Babel require()s but that we don't
		// particularly care about.
		fs: 'empty',
		net: 'empty',
		helper: 'empty',
		module: 'empty'
	},
	externals: [],
	plugins: [...htmls, ...Plugins],
	optimization: Optimization,
	devServer: {
		overlay: true,
		historyApiFallback: true,
		open: !!server.open ? true : false,
		port: server.port && server.port.toString().match(/\d+/).length ? server.port : 3000,
		openPage: entries.length ? `${entries[0]}.html` : null,
		contentBase: dist.client,
		watchContentBase: true,
		hot: false,
		watchOptions: {
			poll: true
		},
		before: function(stat) {
			//console.log(stat);
		},
		after: function(stat) {
			//console.log(stat);
		}
	}
};
if (target === 'client') {
	config.externals.push({
		jquery: 'jQuery'
	});
} else {
	config.externals.push(WebpackNodeExternals());
}
module.exports = config;

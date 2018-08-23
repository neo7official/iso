var fs = require('fs');
const { path, src, dist } = require('./paths');

var {
	assetsFolder,
	cssFolder,
	fontFolder,
	imageFolder,
	jsFolder,
	audioFolder,
	videoFolder
} = require('./path.generalization');

var { mode, target } = require('./modeTarget');

class FixAssetPathInCssPlugin {
	apply(compiler) {
		compiler.hooks.afterEmit.tapAsync('FixAssetPathInCssPlugin', (compilation, cb) => {
			setTimeout(function() {
				assetsFolder.match(/\w+/g) &&
					target === 'client' &&
					fs.readdirSync(`${dist.client}/${assetsFolder}${cssFolder}`).forEach(file => {
						if (file.split('.').length > 1) {
							var pt = assetsFolder.slice(0, assetsFolder.length - 1);
							fs.readFile(`${dist.client}/${assetsFolder}${cssFolder}/${file}`, 'utf8', function(
								err,
								contents
							) {
								var replaced_content = contents.replace(`/${pt.toString()}/g`, '..');
								var sRegExInput = new RegExp(pt, 'g');
								var content = contents.replace(sRegExInput, '..');
								fs.writeFile(`${dist.client}/${assetsFolder}${cssFolder}/${file}`, content, function(
									err
								) {
									if (err) throw err;
									console.log('CSS path fixed.');
								});
							});
						}
					});
			});

			/**/
			cb();
		});
	}
}

module.exports = FixAssetPathInCssPlugin;

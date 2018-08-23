const fs = require('fs');

const { path, src, dist } = require('./paths');
const { mode, target } = require('./modeTarget');
const htmlWebpackPlugin = require('html-webpack-plugin');
const weblog = require('webpack-log');
const log = weblog({ name: 'MEP' });
const chalk = require('chalk');

class multipleEntryPoints {
	constructor(options) {
		this.options = Object.assign(
			{
				customEntries: [],
				commonsChunk: true,
				supportOldBrowsers: true
			},
			options
		);
		this.create_bundle = this.create_bundle.bind(this);
		this.start_building = this.start_building.bind(this);
		this.all_entries = {};
		this.all_htmls = [];
	}

	create_bundle(item, name) {
		//check support needed for react

		log.info(chalk.bgGreen.black(`Entry point mounted - ${item}`));
		switch (target) {
			case 'server':
				this.all_entries[name] = item;
				break;
			case 'client':
				if (this.options.supportOldBrowsers) {
					this.all_entries[name] = ['babel-polyfill', 'whatwg-fetch', item];
				} else {
					this.all_entries[name] = item;
				}
				break;
		}
	}

	build_html(html_path, name) {
		if (fs.existsSync(html_path)) {
			this.all_htmls.unshift(
				new htmlWebpackPlugin({
					filename: `${name}.html`,
					template: html_path,
					chunks: [`${name}`]
				})
			);
		} else {
			this.all_htmls.unshift(
				new htmlWebpackPlugin({
					filename: `${name}.html`,
					chunks: [`${name}`]
				})
			);
		}
	}

	normalize(name) {
		return name.split('.')[0].replace('_', '-');
	}

	start_building() {
		var item, name;
		log.info(chalk.bgYellow.black('**** MultipeEntryPoints Starts ****'));
		switch (target) {
			case 'server':
				fs.readdirSync(src.server).forEach(file => {
					if (file.split('.').length > 1) {
						//ignoring folder names

						item = path.resolve(src.server, `${file}`);
						name = this.normalize(file);
						this.create_bundle(item, name);
					}
				});

				break;

			case 'client':
				switch (!!this.options.customEntries.length) {
					case true:
						this.options.customEntries.forEach(file => {
							item = path.resolve(src.client, `js/${file}`);
							name = this.normalize(file);
							this.create_bundle(item, name);

							var html_path = path.resolve(src.client, `${name}.html`);
							this.build_html(html_path, name);
						});
						break;

					case false:
						fs.readdirSync(path.resolve(src.client, 'js/')).forEach(file => {
							if (file.split('.').length > 1) {
								//ignoring folder names

								item = path.resolve(src.client, `js/${file}`);
								name = this.normalize(file);
								this.create_bundle(item, name);

								var html_path = path.resolve(src.client, `${name}.html`);
								this.build_html(html_path, name);
							}
						});

						break;
				}
				break;
		}

		log.info(chalk.bgYellow.black('***** MultipeEntryPoints Ends *****'));
		return { entry: this.all_entries, htmls: this.all_htmls };
	}
}

module.exports = multipleEntryPoints;

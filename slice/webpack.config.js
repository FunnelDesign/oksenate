'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const config = {
	srcScssCommon: './src/common/',
	src: './src/',
	dist: './dist/',
	trunk: '../trunk/web/themes/custom/senate/dist/',
	filenameJS: './js/index.js',
	filenameMinJS: './js/index.min.js',
	filenameCSS: './css/styles.css',
	filenameMinCSS: './css/styles.min.css'
};

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development';

	const plugins = [
		new MiniCssExtractPlugin({
			filename:  isDevelopment ? config.filenameCSS : config.filenameMinCSS,
			allChunks: true,
			options: {
				minimize: true
			}
		}),
		new CopyPlugin([
			{from: './src/images', to: './images'},
			{from: './src/vendor', to: './vendor'}
		])
	];

	if (!isDevelopment) {
		plugins.push(
			// new CleanWebpackPlugin(),
			new ImageminPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
				disable: isDevelopment, // Disable during development
				cacheFolder: './image-cache',
				jpegtran: { progressive: true },
				optipng: {
					optimizationLevel: 5
				},
				gifsicle: {
					interlaced: true
				},
				svgo: {
					plugins: [
						{removeViewBox: true},
						{removeTitle: true},
						{
							cleanupIDs: {
								minify: true,
								prefix: {
									toString() {
										this.counter = this.counter || 0;

										return `id-${this.counter++}`;
									}
								}
							}
						}
					]
				},
				plugins: [
					imageminJpegRecompress()
				]
			})
		);
	}

	return {
		entry: config.src,

		output: {
			path: path.resolve(__dirname, argv.trunk ? config.trunk : config.dist),
			filename:  isDevelopment ? config.filenameJS : config.filenameMinJS,
			// library: 'site'
		},

		stats: {
			hash: false,
			errorDetails: true,
			entrypoints: false,
			chunkModules: false,
			modules: false,
			version: false,
			builtAt: !isDevelopment
		},

		performance: {
			hints: false
		},

		watch: isDevelopment,

		watchOptions: {
			aggregateTimeout: 100,
			ignored: /node_modules/
		},

		devtool: isDevelopment ? 'cheap-inline-module-source-map' : false,

		module: {
			rules: [
				// {
				// 	enforce: 'pre',
				// 	test: /\.scss$/,
				// 	exclude: /(node_modules|bower_components)/,
				// 	loader: 'eslint-loader',
				// },
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader?optional[]=runtime',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ["@babel/plugin-proposal-optional-chaining"]
						}
					}
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: isDevelopment
							}
						},
						{
							loader: 'clean-css-loader',
							options: {
								inline: ['none'],
								format: 'beautify',
								level: {
									0: {
										all: false,
									},
									1: {
										all: false,
									},
									2: {
										all: false,
										mergeMedia: true,
										mergeAdjacentRules: true,
										removeEmpty: true
									}
								}
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer()
								],
								sourceMap: isDevelopment
							}
						},
						{
							loader: 'sass-loader',
							options: {
								data: `@import "${config.srcScssCommon}settings.scss";`,
								sourceMap: isDevelopment
							}
						}
					],
				},
				{
					test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../fonts/',
							outputPath: './fonts/'
						}
					}
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: {
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../images/',
							outputPath: './images/'
						}
					}
				},
			]
		},

		optimization: {
			minimizer: [
				new OptimizeCSSAssetsPlugin({}),
				new UglifyJsPlugin()
			],
		},

		plugins: plugins
	}
};

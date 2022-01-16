const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
module.exports = {
	entry: {
		main: './dist/app.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'dist/index.html',
			favicon: 'dist/images/favicon-32x32.png',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.png/,
				type: 'asset/resource',
			},
			{
				test: /\.svg/,
				type: 'asset/inline',
			},
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
	},
	mode: 'production',
};

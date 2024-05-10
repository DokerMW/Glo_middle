const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = (env) => {
	return {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, 'src'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'js/[name].js',
			clean: true
		},
		devServer: {
			hot: true,
			static: {
				directory: './',
				watch: true,
			}
		},
		plugins: [
			new HtmlWebpackPlugin(
				{
					filename: 'index.html',
					template: path.resolve(__dirname, './', 'index.html'),
				}
			),
			new HtmlWebpackPlugin(
				{
					filename: 'balkony.html',
					template: path.resolve(__dirname, './', 'balkony.html'),
				}
			),
			new HtmlWebpackPlugin(
				{
					filename: 'kuhni.html',
					template: path.resolve(__dirname, './', 'kuhni.html'),
				}
			),
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin(
				{
					filename: '../build/css/[name].[contentash:8].css',
					chunkFilename: '../build/css/[name].[contentash:8].css',
				}
			),
		],
		module: {
			rules: [
				{
					test: /\.css$/i,
        	use: [MiniCssExtractPlugin.loader, "css-loader"],
				},
			]
		}
	}
}
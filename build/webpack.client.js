const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = require('./webpack.base.js')
const isProduction = process.env.NODE_ENV === 'production'

let config = merge(baseConfig, {
	entry: [path.resolve(__dirname, '../src') + '/entry-client.js'],
	plugins: [new VueSSRClientPlugin()],
	output: {
		path: path.resolve('./dist/'),
		filename: '[name].[hash:8].js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
})

if (!isProduction) {
	config = merge(config, {
		output: {
			filename: '[name].js',
			publicPath: 'http://localhost:9999/dist/'
		},
		plugins: [new webpack.HotModuleReplacementPlugin()],
		devtool: 'source-map',
		devServer: {
			writeToDisk: true,
			contentBase: path.resolve(__dirname, 'dist'),
			publicPath: 'http://localhost:9999/dist/',
			hot: true,
			inline: true,
			historyApiFallback: true,
			port: 9999,
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}
	})
} else {
	config = merge(config, {
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].[hash:8].css'
			})
		]
	})
}

module.exports = config

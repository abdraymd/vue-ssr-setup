const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

let config = {
	mode: isProduction ? 'production' : 'development',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'images/[name].[hash:8].[ext]'
					}
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
}

if (isProduction) {
	config = merge(config, {
		optimization: {
			minimize: true,
			minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
		}
	})
}

module.exports = config

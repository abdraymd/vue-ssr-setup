const path = require('path')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
	entry: [path.resolve(__dirname, '../src') + '/entry-server.js'],
	target: 'node',
	devtool: 'source-map',
	output: {
		libraryTarget: 'commonjs2'
	},
	externals: nodeExternals({
		allowlist: /\.css$/
	}),
	plugins: [new VueSSRServerPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.scss$/,
				use: ['css-loader', 'sass-loader']
			}
		]
	}
})

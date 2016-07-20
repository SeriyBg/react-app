var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'babel-polyfill', 
		'./app/main.js'
	],

	output: {
		path:__dirname + '/dist',
		filename: 'index.js',
	},

	devServer: {
		inline: true,
		port: 7777
	},

	module: {
		loaders: [{
			loader: 'babel-loader',
			test: /\.js?$/,
			exclude: /node_modules/
		}, {
			loader: 'style-loader!css-loader',
			test: /\.css?$/
		}]
	},
	
	plugins: [HTMLWebpackPluginConfig]
}
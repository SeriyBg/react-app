var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './app/main.js',

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
			loader: 'babel',
			test: /\.jsx?$/,
			exclude: /node_modules/,
			query:{
				presets: ['es2015', 'react']
			}	
		}]
	},
	
	plugins: [HTMLWebpackPluginConfig]
}
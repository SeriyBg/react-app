var config = {
	entry: './app/main.js',

	output: {
		path:'./',
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
	}
}

module.exports = config;
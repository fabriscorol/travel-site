var path = require('path');

module.exports = {
	mode: "none",
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				query: {
					presets: ['@babel/preset-env']
				},
				loader: 'babel-loader',
				exclude: /noe_modules/
			}
		]
	}
}
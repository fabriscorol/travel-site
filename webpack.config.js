var path = require('path');

module.exports = {
	mode: "none",
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
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
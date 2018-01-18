var webpack = require("webpack");
var path = require("path");
var OpenBrowserPlugin=require("open-browser-webpack-plugin");
module.exports = {
	entry: "./Editor.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename:"bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({
			url:"http://localhost:8080"
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, loader: "babel-loader"}
		]
	}
}
var path = require('path');

module.exports = {
    // entry: './src/app.js',
    output: {
        filename: './bundle.js'
    },
    module: {
	    loaders: [
		    {
		        loader: 'babel?presets[]=es2015',
                test: /\.js$/
		    }
	    ]
	},
	stats: {
        colors: true
    },
    devtool: 'source-map'
};
var path 		= require('path');
var rootPath	= path.normalize(__dirname + '/../../');

var configurations = {
	
	dev: {
		rootPath: rootPath,
		db: 'mongodb://localhost/nigshahom',
		port: process.env.PORT || 3000
	},
	prod: {
		rootPath: rootPath,
		db: '',
		port: process.env.PORT || 80
	}
}

module.exports = configurations;
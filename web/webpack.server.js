const env = process.env.NODE_ENV;

module.exports = {
    contentBase: '/build',
    port: 8090,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: env === 'production' ? false : true,
    index: 'index.html',
    host: '0.0.0.0',// 允许外部访问
    proxy: [{
	    context: ['/user/*', 
	        '/system/*', 
	        '/icon/*',
	        '/instruction/*',
            '/datajudge/*'
	    ],
	    //target: 'http://192.168.31.99:9020'
        target: 'http://192.168.31.65:9090'
	}]
}
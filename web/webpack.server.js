const env = process.env.NODE_ENV;

module.exports = {
    contentBase: '/build',
    port: 8090,
    inline: true,
    disableHostCheck: true,
    index: 'index.html',
    host: '0.0.0.0',// 允许外部访问
    proxy: [{
	    context: ['/user/*', 
	        '/system/*', 
	        '/icon/*',
	        '/instruction/*',
            '/datajudge/*'
	    ],
        target: 'http://192.168.25.172:8090'
	}]
}
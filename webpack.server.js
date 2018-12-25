// const proxy = require('./webpack.proxy.js'); 

module.exports = {
    contentBase: '/build',
    port: 8080,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    index: 'index.html',
    host: '0.0.0.0' // 允许外部访问
}
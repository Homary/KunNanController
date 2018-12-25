// const proxy = require('./webpack.proxy.js'); 
const env = process.env.NODE_ENV;

module.exports = {
    contentBase: '/build',
    port: 8080,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: env === 'production' ? false : true,
    index: 'index.html',
    host: '0.0.0.0' // 允许外部访问
}
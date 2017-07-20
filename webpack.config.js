var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        login:'./public/javascript/babel/login.js',
    },
    output: {
        path : path.resolve(__dirname, 'public/javascript/webpack/'),
        filename: '[name].js'
    }
}
var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        login:'./public/javascript/babel/login.js',
        signup:'./public/javascript/babel/signup.js',
        main:'./public/javascript/babel/main.js'
    },
    output: {
        path : path.resolve(__dirname, 'public/javascript/webpack/'),
        filename: '[name].js'
    }
}
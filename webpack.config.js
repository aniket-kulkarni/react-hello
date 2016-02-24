var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool : 'source-map',
    context : path.resolve('client/js'),
    entry : [ "./app"],
    output : {
        path : path.resolve('client/build/'),
        publicPath : '/public/',
        filename : "bundle.js"
    },
    watch : false,
    devServer : {
        contentBase : 'client',
        port : 3005
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ],

    module : {
        loaders : [
            {
                test : /\.(es6|js|jsx)$/,
                exclude : /node_modules/,
                loader : "babel"    
            },
            {
                test: /\.css/,
                loader : ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!cssnext-loader')
            }
        ]
    },

    resolve : {
        extensions : ['','.js','.es6','.jsx']
    }
}
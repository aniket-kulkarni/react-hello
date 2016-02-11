var path = require('path');

module.exports = {
    context : path.resolve('client/js'),
    entry : ["./app"],
    output : {
        path : path.resolve('client/build/'),
        publicPath : 'public/assets/js/',
        filename : "bundle.js"
    },
    watch : false,
    devServer : {
        contentBase : 'client',
        port : 3005
    },

    module : {
        loaders : [
            {
                test : /\.(es6|js|jsx)$/,
                exclude : /node_modules/,
                loader : "babel"
            }
        ]
    },

    resolve : {
        extensions : ['','.js','.es6','.jsx']
    }
}
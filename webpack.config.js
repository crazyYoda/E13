const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
           new HtmlWebpackPlugin({
               patterns: [
                   {title: 'Development'},
               ]
      }),
    ],
    output: {
        filename: 'main.js'
    },

};


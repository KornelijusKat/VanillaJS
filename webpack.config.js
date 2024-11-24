const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/app.js', //main js file
    output:{
        path: path.resolve(__dirname, 'public'), // location for file generation
        filename: 'app.js', 
        clean: true, //clean after new generation so that old code can't impede functionality
        publicPath: '/'
    },
    module:{
        rules: [
            { //transpile js code
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/, //compile scss to css
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html', //src html file
            fileName: 'index.html', //public html file
            
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer:{
        static:'./public', //main dir serving
        port: 3000, //web server port
        open: true, //start browser auto
    }
};
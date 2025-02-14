const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'development', // Or 'production' for a production build
    entry: './src/index.ts', // Your main TypeScript file
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'index.js', // Output filename
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve these extensions
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Use ts-loader for TypeScript files
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/activities', to: 'activities' },
                { from: 'index.html', to: 'index.html' }, // Copies your index.html
                { from: 'style.css', to: 'style.css' }, // Copies your style.css
                { from: 'manifest.json', to: 'manifest.json' }, // Copies your manifest.json
                { from: 'icons', to: 'icons' }, // Copies your icons folder
                { from: 'src/sidebar.js', to: 'sidebar.js' }, // Copies your sidebar.js
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000,
    },
        optimization: {
    minimizer: [
      // For webpack 5 use CssMinimizerPlugin
      new CssMinimizerPlugin(),
    ],
  },
};
const path = require('path');


module.exports = {
    entry: {
        index: './src/main.js' 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]
    },
    watch: true,
    watchOptions: {}
}
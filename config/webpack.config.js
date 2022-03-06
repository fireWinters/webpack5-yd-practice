const path = require('path');

module.exports = {
  mode: "development",
  
  entry: "./src/index.js",
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
      rules:[
          {
            test:/\.(ts|tsx)$/i, 
            loader: 'ts-loader',
            exclude: ["/node_modules/"],
          },
          {
              test:/\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
              type:"asset"
          }
      ]
  },
  resolve:{
        extensions:[".ts",".tsx",".js"],
  }
};

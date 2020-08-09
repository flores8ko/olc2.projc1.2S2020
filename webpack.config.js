const path = require('path');

module.exports = {
  mode: 'development',
  node: {
    fs: "empty",
  },

  entry: {
    engine: './src/index.ts',
    parser: './src/calc.jison'
  },
  output: {
    filename: '[name].js',
    // path: __dirname + '/dist'
    path: path.resolve(__dirname, 'dist'),
  },
  
  devtool: 'inline-source-map',
  module: {
  	rules: [
  		{
  			test: /\.tsx?$/,
	        use: 'ts-loader',
	        exclude: /node_modules/,
  		},
      {
        test: /\.jison$/,
        use: [
          {
            loader: path.resolve('./jison-loader.js'),
          }
        ]
      }
  	],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
  	extensions: ['.tsx', '.ts', '.js', '.jison'],
  },
};
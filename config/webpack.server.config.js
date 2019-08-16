const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../server.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: './'
  },
  mode: process.env.NODE_ENV,
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.less', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  optimization: {
    splitChunks: false
  },
  externals: [
    nodeExternals({
      whitelist: /\.less$/
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: path.resolve('node_modules'),
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve('src'),
        use: 'ignore-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*', '!public']
      // cleanAfterEveryBuildPatterns: ['*']
    })
  ]
}

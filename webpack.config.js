const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const workboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.EnvironmentPlugin({
      BASE_URL: "https://localhost:8000"
    }),
    new workboxPlugin({
      globDirectory: "dist",
      globPatterns: ['**/*.{html,js,css}'],
      swDest: path.join("dist", 'sw.js'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }
}
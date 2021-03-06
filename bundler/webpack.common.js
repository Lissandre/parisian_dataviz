const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: 'static', to: 'static' }] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: true,
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.json$/,
        use: ['json-loader'],
        type: 'javascript/auto'
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/images/' },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/fonts/' },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(fbx|glb|obj|3ds|gltf|drc)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/models/' },
          },
        ],
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/audios/' }
          },
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/videos/' }
          },
        ]
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      },
    ],
  },
}

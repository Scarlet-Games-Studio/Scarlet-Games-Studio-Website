const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize as needed
  return config;
};

module.exports = {
  mode: 'production',  // ou 'development'
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              
            },
          },
        ],
      },
     
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx'], // Para garantir que arquivos JS e JSX sejam resolvidos
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Substitua 'contentBase' por 'static'
    },
    compress: true,
    port: 8081,
  },

};
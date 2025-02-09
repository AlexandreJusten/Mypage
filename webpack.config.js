module.exports = {
    // outras configurações do Webpack
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // Ignora erros de tipo
            }
          },
          exclude: /node_modules/,
        },
      ],
    },
  };
  
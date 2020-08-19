module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [

            require('tailwindcss'),
            require('autoprefixer'),

            process.env.NODE_ENV === 'production' ? require('@fullhuman/postcss-purgecss')({
              content: [
                './apps/*/src/**/*.html',
                './apps/*/src/**/*.scss',
                './apps/*/src/index.html'
              ],
              defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
            }) : require('postcss-import'),
          ]
        }
      }
    ]
  }
};
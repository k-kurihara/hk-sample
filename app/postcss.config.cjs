const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    require('postcss-normalize-charset'),
    require('autoprefixer'),
    require('css-declaration-sorter')({ order: 'smacss' }),
    require('postcss-sort-media-queries'),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.hbs'], // ← hbsも対象にする
      defaultExtractor: content =>
        content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};

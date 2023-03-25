module.exports = {
  plugins: {
    'postcss-inline-svg': {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nested',
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      features: {
        'custom-properties': false
      }
    },
    tailwindcss: {},
    autoprefixer: {
      grid: 'autoplace'
    }
  }
}

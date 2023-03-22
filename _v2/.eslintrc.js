module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'longform',
        named: 'longform'
      }
    ]
  }
}

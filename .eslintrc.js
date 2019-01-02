module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [2, 'unix'],
    semi: [2, 'never'],
    'max-len': [0, { code: 200 }],
    'object-curly-newline': 0,
    'global-require': 0,
    'no-unused-vars': 1,
    'no-shadow': [2, { allow: ['err', 'error'] }],
    'no-lone-blocks': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

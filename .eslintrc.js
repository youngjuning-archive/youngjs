// yarn add eslint eslint-config-airbnb-base eslint-plugin-import -D
module.exports = {
  "extends": ["airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
    }
  },
  "env": {
    "node": true,
    "jest": true,
    "browser": true
  },
  "rules": {
    "semi": [2, "never"],
    "comma-dangle": 0,
    "global-require": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": 0,
    "linebreak-style": [2, "unix"],
    "lines-between-class-members": [2, "always", { exceptAfterSingleLine: true }],
    "no-use-before-define": [2, { "functions": true, "classes": true, "variables": false }],
    "prefer-destructuring": [2, { "array": false, "object": true }]
  },
}

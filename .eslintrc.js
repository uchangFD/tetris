module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-body-style": ["error", "always"],
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "prefer-const": 0,
    "prefer-destructuring": 0,
    "prefer-template": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
  },
};

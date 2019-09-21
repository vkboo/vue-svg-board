module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  "globals": {
    "FormData": true,
    "XMLHttpRequest": true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 可混合使用不同的操作符
    "no-mixed-operators": "off",
    // 空格2个
    "indent": [2, 4, { "SwitchCase": 1 }],
    // 变量命名风格
    "camelcase": [1, { properties: "never" }],
    // 分号
    'semi': [1, "always"],
    // 多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [1, "always-multiline"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
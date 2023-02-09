module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //关闭eslint检查文件名是否为驼峰命名
    'vue/multi-word-component-names': 'off'
  }
}
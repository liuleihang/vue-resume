module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //关闭eslint检查文件名是否为驼峰命名
    'vue/multi-word-component-names': 'off',
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    // 'vue/no-template-key': 'off'
  }
}
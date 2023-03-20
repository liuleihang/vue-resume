module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        // 要兼容的目标浏览器
        "targets": {
          "edge": "17",
          "ie":'11',
          "firefox": "60",
          "chrome": "67",
          "safari": "11"
        },
        // 使用corejs的方式  usage表示按需加载
        "useBuiltIns": "usage",
        // 指定corejs版本
        "corejs": 3
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'elemnet-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'elemnet-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    [
      "import",
      {
        libraryName: 'lodash-es',
        libraryDirectory: "",
        camel2DashComponentName: false,
      }
    ]
  ]
}

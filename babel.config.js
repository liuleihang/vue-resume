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
        libraryName: 'lodash',
        libraryDirectory: "",
        camel2DashComponentName: false,
      }
    ]
  ]
}

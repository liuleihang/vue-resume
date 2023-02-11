/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '刘磊航的个人简历' // page title
module.exports = {
  //域名子路径
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-resume/' : '/',
  //域名根路径、github pages
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'), //本项目路径src路径设置别名为@
        'assets': resolve('src/assets'), //本项目路径src/assets路径设置别名为assets，静态文件前要加~，否则只会以当前目录为基准
        'api': resolve('src/apis'),
        'common': resolve('src/common')
      }
    }
	},
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = name
      return args
    })
  }
}
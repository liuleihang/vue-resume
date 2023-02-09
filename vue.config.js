/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue个人简历' // page title
module.exports = {
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
	}
}
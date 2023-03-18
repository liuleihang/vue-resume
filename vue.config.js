const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// const IgnorePlugin = require('webpack').IgnorePlugin;
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 路径处理方法
function resolve(dir) {
  return path.join(__dirname, dir)
}
const pageTitle = '刘磊航的个人简历' // page title
// 需要通过 cross-env 定义环境变量
const isProduction = process.env.NODE_ENV === "production";
module.exports = defineConfig({
  // 静态资源路径（默认/，如果不改打包后会白屏）
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // 不输出map文件
  productionSourceMap: !isProduction,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      // 打包分析
      new SpeedMeasurePlugin(),
      // new IgnorePlugin({
      //   resourceRegExp: /^\.\/locale$/,
      //   contextRegExp: /element-ui$/,
      // })
    ],
    resolve: {
      extensions: ['.vue', '.js', '.json', 'scss', 'css'],
      alias: {
        '@': resolve('src')
      }
    },
    // 打包文件大小控制
    performance: {
      // 入口起点的最大体积,单位: bytes
      "maxEntrypointSize": 10000000,
      // 生成文件的最大体积
      "maxAssetSize": 30000000
    }
  },
  devServer: {
    hot: true,
    historyApiFallback: true, // 解决vue-router刷新404问题
  },
  chainWebpack: config => {
    //使用externals设置排除项
    // config.set('externals',{
    //   vue:'Vue',
    //   'vue-router':'VueRouter',
    //   axios:'axios',
    // })
    config.module
      .rule('images')
      .set('parser', {
        dataUrlCondition: {
          maxSize: 5 * 1024 // 将内联图片资源限制设置为 5KiB
        }
      })
    config.plugin('eslint').tap((args) => {
      args[0].context = resolve('./src');
      args[0].exclude = 'node_modules';
      return args;
    })
    config
    .plugin('html')
    .tap(args => {
      args[0].title = pageTitle
      return args
    })
    config.when(
      process.env.NODE_ENV === "production",
      (config) => {
        config.optimization
          .splitChunks({
            chunks: 'all',
            cacheGroups: {
              // 如果项目中使用element-plus，此时将所有node_modules打包在一起，那么打包输出文件会比较大。
              // 所以我们将node_modules中比较大的模块单独打包，从而并行加载速度更好
              elementUI: {
                name: "chunk-elementUI",
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
                priority: 30,
              },
              // 将vue相关的库单独打包，减少node_modules的chunk体积。
              vue: {
                name: "vue",
                test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
                chunks: "initial",
                priority: 20,
              },
              libs: {
                name: "chunk-libs",
                test: /[\\/]node_modules[\\/]/,
                priority: 10, // 权重最低，优先考虑前面内容
                chunks: "initial",
              },
            },
          })
          .runtimeChunk({
            name: (entrypoint) => `runtime~${entrypoint.name}.js`
          })
      }
    )
  },
})
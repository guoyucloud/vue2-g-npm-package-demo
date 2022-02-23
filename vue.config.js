const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, // 让node_module使用babel转译
  publicPath: './', // 静态文件打包存放的目录
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使新增的 packages文件夹 以及 examples文件夹 加入编译
  chainWebpack: config => {
    config.module
        .rule('js')
        .include
        .add(__dirname + '/packages') // 设置需要加入的路径，从根目录开始 + packages
        .end()
        .include
        .add(__dirname + '/examples') // 设置需要加入的路径，从根目录开始 + examples
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
})

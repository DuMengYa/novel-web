// 严格模式
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title || '小说网后台管理平台'
// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
  publicPath: '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查，有效值：ture | false | 'error'
  lintOnSave: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    Proxy: {

    },
    configureWebpack: {
      name: name,
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  }
}

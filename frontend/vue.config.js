const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy : 'http://localhost:8787'
  },

  //index.html파일이 저장되는 경로
  //outputDir 기준 상대경로
  indexPath: '../../templates/vue/index.html',

  
  publicPath: '/vue',

  //빌드된 vue project의 결과물이 저장되는 경로
  //frontend 폴더 기준 상대경로
  outputDir: path.resolve(__dirname, "../backend/src/main/resources/static/vue"),
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_mediaQueries.scss";
          @import "@/assets/style/_svg.scss";
          @import "@/assets/style/_common.scss";
          `
      }
    }
  }
})
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy: {
      '/api': { //请求的前缀为/api就代理发送
        target: 'http://39.98.123.211',
        // pathRewrite:{'^api':''},
        ws: true,  //用于支持websocket
        changeOrigin: false //对服务器说谎
      },
    }
  }
})

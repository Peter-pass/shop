// // const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   productionSourceMap:false,
//   lintOnSave:false,
//   //配置代理跨域
//   devServer:{
//     proxy:{
//       '/api':{
//         target:'http://gmall-h5-api.atguigu.cn',
//         // pathRewrite:{'^/ap':''},
//       },
//     },
//   },
// })
module.exports = {
  productionSourceMap:false,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211',
      },
    },
  },
}

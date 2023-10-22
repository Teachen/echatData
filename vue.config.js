/*
 * @Author: chenjin 1185941165@qq.com
 * @Date: 2023-09-14 14:29:53
 * @LastEditors: chenjin 1185941165@qq.com
 * @LastEditTime: 2023-09-15 16:47:20
 * @FilePath: \echartVue3资料\代码\myapp\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports={
    lintOnSave:false,
    publicPath:process.env.NODE_ENV="production"?"./":"/",
    devServer: {
        // 设置为0.0.0.0则所有的地址均能访问
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: true,
        disableHostCheck: true,
        // 跨域问题解决 代理（关键部分）
        proxy: {
            '/api': {
                target: "http://39.105.32.73:8000/",
                // target: "http://127.0.0.1:8000/",
                changeOrigin: true, // 允许跨域
                headers: {
                    Origin: "http://39.105.32.73:8000/"
                },
                secure: true,
                ws: true,
                pathRewrite: {
                  // 如果接口中是没有api的，那就直接置空，'^/api': ''，
                  // 如果接口中有api，那就得写成{'^/api':'/api'}
                  '^/api': '/api'
                }
            }
        }
    }
}
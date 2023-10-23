<!--
 * @Author: ChenJin 1185941165@qq.com
 * @Date: 2023-09-14 14:30:00
 * @LastEditors: chenjin 1185941165@qq.com
 * @LastEditTime: 2023-10-23 15:12:56
 * @FilePath: \echartVue3资料\代码\myapp\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view/>
</template>
<script>
import {provide} from "vue"
import * as echarts from "echarts"
import axios from "axios"

// 设置基准路径
axios.defaults.baseURL="https://fanzhihu-backend-76469-5-1304297249.sh.run.tcloudbase.com/"
// axios.defaults.baseURL="http://127.0.0.1:8000/"
export default {
  setup(){
    // provider("名字随便起","传递的内容")
    provide("echarts",echarts)
    provide("axios",axios)
  }
}
</script>

<style lang="less">
body{
  background: url("~@/assets/bg.jpg") top center no-repeat;
}
*{
  margin:0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>

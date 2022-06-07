import Vue from 'vue'

import 'normalize.css/normalize.css' // 导入一个初始化css样式包

import ElementUI from 'element-ui' // elment-ui组件库
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n element-ui的英文包

// @表示的就是src文件夹 vue脚手架环境自带的
import '@/styles/index.scss' // 导入全几乎的样式文件

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 导入src路径下的permission.js文件（路由导航守卫处理）

// set ElementUI lang to EN（设置英文版的）
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false // 隐藏控制台的提示

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

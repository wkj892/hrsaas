import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个axios的实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})
// 请求拦截器
// 添加请求拦截器
service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  // console.log(response)
  const { success, message } = response.data

  if (success) {
    // js文件中不能用组件中的this,需要引入element-ui
    Message.success(message)
  } else {
    Message.error(message)
    // 请求失败,不能再跳转了
    // 抛出异常,阻止后面代码执行
    return Promise.reject(message)
  }
  return response
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default service // 导出axios实例

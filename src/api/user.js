import request from '@/utils/request'
// 封装登录请求
export function reqlogin(data) {
  // data形参
  return request.post('/sys/login', data)
}

export function getInfo() {

}

export function logout() {

}

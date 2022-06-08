// 先初始化一个空项目，后期自己写
import { reqlogin } from '@/api/user'

import { setToken, getToken } from '@/utils/auth'
export default {
  state: {
    token: getToken() || ''
  },
  mutations: {
    setToken(state, token) {
      setToken(token)
      state.token = token
    }

  },
  actions: {

    async login(context, loginForm) {
      const res = await reqlogin(loginForm)
      const { data, success } = res.data

      if (success) {
        context.commit('setToken', data)
      }
      return res.data
    }

  },
  namespaced: true
}

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name

  // getters中定义的是计算属性，这些数据是基于state中的数据派生出的数据
}
export default getters

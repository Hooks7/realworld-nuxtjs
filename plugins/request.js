/**
 * 基于 @nuxt/axios 封装的请求模块
 */

// 插件导出函数必须作为 default 成员
export default function ({ $axios, store }, inject) {

  $axios.onRequest(function (config) {
    // Do something before request is sent
    // 请求就会经过这里
    const { user } = store.state

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    // 返回 config 请求配置对象
    return config
  }, function (error) {
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    // Do something with request error
    return Promise.reject(error)
  })


  $axios.onResponse(response => {
    return response.data
  }, error => {
    return Promise.reject(error);
  })

  inject('$axios', $axios.create())
}

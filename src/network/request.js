import axios from "axios"



// // 1.创建axios实例,做全局配置
// const instance = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 1000
// })

// // 2.请求拦截器
// // 请求或者响应会在then或者catch之前拦截他们
// instance.interceptors.request.use(function(config) {
//   // .在请求之前做的事情
//   return config
// }, function(err) {
//   return Promise.reject(err)
// })

// // 3.响应拦截器
// instance.interceptors.response.use(function(res) {
//   return res.data
//   // return res
// }, function(err) {
//   return Promise.reject(error);
// })
// export default instance
// 老师写的
export function request (config) {

  // 1.创建axios实例,做全局配置
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 8000
  })

  // 2.请求拦截器
  // 请求或者响应会在then或者catch之前拦截他们
  instance.interceptors.request.use(function(config) {
    // .在请求之前做的事情
    return config
  }, function(err) {
    return Promise.reject(err)
  })

  // 3.响应拦截器
  instance.interceptors.response.use(function(res) {
    return res.data
    // return res
  }, function(err) {
    return Promise.reject(error);
  })
  return instance(config)
}

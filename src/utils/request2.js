import axios from 'axios'
// 请求头，设置公共参
const comm_req = {
  id: '',
  phonno: ''
}
// 创建axios实例
const axiosServer = axios.create({
  baseURL: '/test',
  timeout: 30000 // 请求超时时间
})
// 拦截请求
axiosServer.interceptors.request.use(config => {
  console.log('请求之前' + JSON.stringify(config.url))
  // config.data.comm_req = Object.assign(
  //   JSON.parse(JSON.stringify(comm_req)),
  //   config.data.comm_req
  // )
  return config
}, error => {
  console.log('进入请求错误' + error)
  return Promise.reject(error)
})
// 拦截响应
axiosServer.interceptors.response.use(response => {
  console.log('进入响应之前' + response)
  return response.data
}, error => {
  return Promise.reject(error)
})
export default axiosServer

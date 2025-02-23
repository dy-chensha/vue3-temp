import axios from 'axios'
import { ElMessage } from 'element-plus';
// 创建axios实例添加配置
let request = axios.create(
  {
    baseURL: import.meta.env.VITE_APP_BASE_API,// 基础路径携带api
    timeout: 5000,//超时时间
  }
);
// 请求实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性，经常给服务端携带公共参数
  
  // 返回配置对象
  return config
})
// 响应拦截器
request.interceptors.response.use((response) => {
  // 
  return response.data
}, (err) => {
  // 处理错误
  let message = ''
  let status = err.response.status
  switch (status) {
    case 401:
      message = '无权访问'
      break
    case 403:
      message = '禁止访问'
      break
    case 404:
      message = '请求地址错误'
      break
    case 500:
      message = '服务器错误'
      break
  }
  ElMessage({
    type:'error',
    message
  })
  return Promise.reject(err)
})
// 对外暴露
export default request
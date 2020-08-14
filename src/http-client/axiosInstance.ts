import axios from 'axios'
import config from 'config'
import httpStatus from './status'

const axiosInstance = axios.create({
  baseURL: config.baseURL,
  //NOTE: header全局配置
  headers: {
    salePlatformID: config.salePlatformID
  },
  timeout: 3000
})

axiosInstance.interceptors.request.use(
  config => {
    //TODO: -- 自定义对header统一处理
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  res => res,
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          //NOTE: 自定义需登录操作处理
          break
        default:
          error.message = httpStatus[error.response.status]
      }
    } else {
      error.message = '请求失败'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance

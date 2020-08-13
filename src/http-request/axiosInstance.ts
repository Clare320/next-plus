import axios from 'axios'
import cookies from 'js-cookie'
import config from 'config'
import httpStatus from './status'

const tokenCookieKey = 'KEDESHOPING8b44c296683e'

const axiosInstance = axios.create({
  baseURL: config.baseURL,
  headers: {
    salePlatformID: config.salePlatformID
  },
  timeout: 3000
})

axiosInstance.interceptors.request.use(
  config => {
    const headers = config.headers
    const oldToken = headers.token
    const token = cookies.get(tokenCookieKey)
    if (headers && token && token.length > 0 && oldToken !== token) {
      config.headers.token = token
    }
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
          window.location.href = window.origin + '/login'
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

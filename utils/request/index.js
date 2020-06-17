import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.117.39:8004',//TODO: use config
  baseURL: 'http://127.0.0.1:3000/api/',
  headers: {
    salePlatformId: '63710AD6-A235-458F-BFCF-1BFEE63CAB35',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default instance

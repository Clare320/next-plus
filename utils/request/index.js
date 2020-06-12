import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.117.39:8004',
  headers: {
    salePlatformId: '63710AD6-A235-458F-BFCF-1BFEE63CAB35',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

export default instance

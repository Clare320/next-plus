import Axios from 'axios'

const isMobile = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  const testUa = regexp => regexp.test(ua)
  let system = 'unkown'
  if (testUa(/windows|win32|win64|wow32|wow64/g)) {
    system = 'windows'
  } else if (testUa(/macintosh|macintel/g)) {
    system = 'macos'
  } else if (testUa(/x11/g)) {
    system = 'linux'
  } else if (testUa(/android|adr/g)) {
    system = 'android'
  } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
    system = 'ios'
  }
  console.log('axios config --->', ua, system)
  if (system === 'ios' || system === 'android') {
    return true
  } else {
    return false
  }
}

const instance = (() => {
  // const isMob = isMobile()
  // const url = isMob ? 'http://192.168.117.106:3000' : 'http://localhost:3000'
  return Axios.create({
    // baseURL: 'http://192.168.117.39:8004',//TODO: use config
    // baseURL: 'http://127.0.0.1:3000/api/',
    baseURL: 'http://localhost:3000', //
    headers: {
      salePlatformId: '63710AD6-A235-458F-BFCF-1BFEE63CAB35',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
})()

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

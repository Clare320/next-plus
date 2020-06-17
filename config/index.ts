
import getConfig from 'next/config'

const development = {
  baseURL: 'http://127.0.0.1:8776/'
}
const staging = {
  baseURL: 'http://api.kede.com/staging'
}
const production = {
  baseURL: 'http://api.kede.com/production'
}

const config = () => {
  const { publicRuntimeConfig: { REACT_APP_ENV = 'production' } } = getConfig()

  if (REACT_APP_ENV === 'development') {
    // do development config
    return development
  } else if (REACT_APP_ENV === 'staging') {
    // do staging config
    return staging
  } else {
    // do production config
    // e.g： analyse(false)
    return production
  }
}

export default config()

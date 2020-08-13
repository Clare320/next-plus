interface Config {
  origin: string,
  baseURL: string,
  salePlatformID: string,
}

const developmentConfig = {
  origin: 'http://devm.kede.net',
  baseURL: 'http://devapi.kede.net',
  salePlatformID: '63710AD6-A235-458F-BFCF-1BFEE63CAB35'
}

const stagConfig = {
  origin: 'http://devm.kede.net',
  baseURL: 'http://preapi.keede.cn',
  salePlatformID: '63710AD6-A235-458F-BFCF-1BFEE63CAB35'
}

const productionConfig = {
  origin: 'https://m.kede.com',
  baseURL: 'https://kdapi.keede.com',
  salePlatformID: '63710AD6-A235-458F-BFCF-1BFEE63CAB35'
}

type Configure = () => Config
const configure: Configure = () => {
  const environment = process.env.REACT_APP_ENV
  if (environment === undefined) {
    return developmentConfig
  }
  if (environment.includes('Development')) {
    return developmentConfig
  } else if (environment === 'Staging') {
    return stagConfig
  } else {
    return productionConfig
  }
}

export default configure()

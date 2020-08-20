import httpClient from './http-client'

const isString = (service: any) => typeof service === 'string'
// const isObject = (service: any) => typeof service === 'object'

const fetcher = (param: string | object) => {

  if (isString(param)) {
    const url = param as string
    return httpClient.post(url).then(res => res.data)
  }

  const config = param as object
  return httpClient.request(config).then(res => res.data)
}

export default fetcher

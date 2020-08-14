const httpStatus: { [key: string]: string } = {
  400: '错误请求',
  401: '未授权',
  403: '禁止访问',
  404: '未找到',
  410: '请求的资源已经被删除',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时'
}

export default httpStatus

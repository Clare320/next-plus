const LRU = require('lru-cache')
const getEtag = require('etag')
const normalizeUrl = require('normalize-url')
const createCompress = require('compress-brotli')
const { serialize } = createCompress()

/**
 *  控制页面输出缓存 & 设置Response Header
 */
class MemCache {

  constructor () {
    // this.ttl = 1000 * 60 * 60
    this.ttl = 1000 * 60 * 5 //5min
    this.cache = new LRU({
      max: 20,
      maxAge: this.ttl
    })
  }

   toSeconds = ms => Math.floor(ms / 1000)

  /* get the cache key */
  getKey = (req) => {
    const url = new URL(req.url, 'http://localhost').toString()
    const { origin } = new URL(url)
    const baseKey = normalizeUrl(url, {
      removeQueryParameters: ['force', /^utm_\w+/i]
    })
    return  baseKey.replace(origin, '').replace('/?', '')
    // console.log('SERVER_CACHE：CACHE KEY: ', cacheKey)
  }

  /* set headers */
  setHeaders = ({ res, createdAt, isHit, ttl, hasForce, etag }) => {
    // Specifies the maximum amount of time a resource
    // will be considered fresh in seconds
    const diff = hasForce ? 0 : createdAt + ttl - Date.now()
    const maxAge = this.toSeconds(diff)
    // const revalidation = this.toSeconds(Math.round(ttl * 0.2))

    res.setHeader('Cache-Control', `public, max-age=${maxAge}`)
    res.setHeader('X-Cache-Status', isHit ? 'HIT' : 'MISS')
    res.setHeader('ETag', etag)
  }

  renderWithCache = async (app,req, res) => {
    const hasForce = Boolean(
      req.query ? req.query.force : parse(req.url.split('?')[1]).force
    )
    const key = this.getKey(req)

    /* 缓存是否命中 */
    const ifNoneMatch = req.headers['if-none-match']
    /* 1. 缓存 */
    if (this.cache.has(key)) {
      const cachedResult = this.cache.get(key)
      /* 缓存存在 && !force （非强制刷新缓存）*/
      if (cachedResult && !hasForce) {
        const {
          etag: cachedEtag,
          ttl,
          createdAt = Date.now(),
          data
        } = cachedResult
        this.setHeaders({ res, createdAt, isHit: true, ttl, hasForce, etag:cachedEtag })
        /* etag none modify */
        if (cachedEtag === ifNoneMatch) {
          res.statusCode = 304
          res.end()
          return
        }else {
          /* etag modify */
          res.end(data)
          return
        }
      }
      /* 缓存key存在，但是未命中 | 已失效，del */
      this.cache.del(key)
      //console.log('SERVER_CACHE：del cache key:',key)
    }

    /* 2.未命中缓存，服务端重新生成 */
    try {
      const _resEnd = res.end.bind(res)
      res.end = (payload) => {
        if (res.statusCode !== 200) {
          console.warn('SERVER_CACHE：something is wrong, statusCode: ', res.statusCode)
        } else {
          const etag = getEtag(serialize(payload))
          const createdAt = Date.now()
          const cachePayload = {
            etag,
            createdAt,
            ttl:this.ttl,
            data: payload
          }

          this.setHeaders({ res, createdAt, isHit: false, ttl:this.ttl, hasForce, etag })
          this.cache.set(key, cachePayload, this.ttl)
          //const ret = this.cache.set(key, cachePayload, this.ttl)
          // if(ret){
          //   console.log('SERVER_CACHE：CACHE DATA SUCCESS')
          // }else {
          //   console.log('SERVER_CACHE：CACHE DATA FAILED')
          // }

          /*客户端缓存存在,服务端缓存MISS，重新生成数据,匹配etag*/
          if (ifNoneMatch === etag) {
            //console.log('SERVER_CACHE：MISS & 304')
            res.statusCode = 304
            return _resEnd()
          }
        }
        return _resEnd(payload)
      }
      // console.info('SERVER_CACHE：MISS & GENERATE')
       await app.renderToHTML(req, res, req.path, {
        ...req.query,
        ...req.params
      })
    } catch (error) {
      app.renderError(error, req, res, req.path, {
        ...req.query,
        ...req.params
      })
    }
  }
}

module.exports = new MemCache()

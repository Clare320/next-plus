const express = require('express')
const next = require('next')
// const MemCache = require('./src/utils/memcache')

process.env.NODE_ENV = 'production'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.disable('x-powered-by') // disables Express x-powered-by header
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

module.exports = {
  apps: [{
    name: 'KedeWebSite',
    script: './server.js',
    instances: 2,
    exec_mode: 'cluster',
    max_memory_restart: '1024M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}

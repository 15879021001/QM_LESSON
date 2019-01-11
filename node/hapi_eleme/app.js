const Hapi = require('hapi')
const server = new Hapi.Server()
const routesHellohapi = require('./routes/hello_hapi')
const routesShops = require('./routes/shops')
const routesUsers = require('./routes/users')
require('env2')('./.env')
const config = require('./config')
const pluginHapiSwagger = require('./plugins/hapi-swagger')



server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    ...routesHellohapi,
    ...routesShops,
    ...routesUsers
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()

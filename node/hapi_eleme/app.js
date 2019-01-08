const Hapi = require('hapi')
const server = new Hapi.Server()
const routesHellohapi = require('./routes/hello_hapi')
const config = require('./config')
require('env2')('./.env')

server.connection({
  port: 3000,
  host: '127.0.0.1'
})

const init = async () => {
  server.route([
    ...routesHellohapi
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()

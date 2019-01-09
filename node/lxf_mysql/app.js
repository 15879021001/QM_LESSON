const Sequelize = require('sequelize');
const config = require('./config');
console.log('init sequelize...');

var sequelize = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);

// ORM 
var Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
})

var now = Date.now()
Pet.create({
  id: 'g-' + now,
  name: 'Gaffey',
  gender: false,
  birth: '2007-01-01',
  createdAt: now,
  updatedAt: now,
  version: 0
}).then((p) => {
  console.log(`created.${JSON.stringify(p)}`)
}).catch(err => {
  console.log(`failed:${err}`)
})



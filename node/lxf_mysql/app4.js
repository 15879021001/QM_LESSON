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
});

var now = Date.now();

(async () => {
  var pets = await Pet.findAll({
    where: {
      name: 'Gaffey'
    }
  })
  console.log(`find ${pets.length} pets:`)
  for(let p of pets) {
    console.log(JSON.stringify(p))
    p.gender = true
    p.updatedAt = Date.now()
    p.version++
    await p.save()
  }
})();





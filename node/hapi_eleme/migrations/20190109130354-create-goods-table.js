module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable(
      'goods',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        shop_id: {
          type: Sequelize.INTEGER,
          allowNULL: false
        },
        name: {
          type: Sequelize.STRING,
          allowNULL: false
        },
        thumb_url: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      }
    )
  ,
  down: queryInterface => queryInterface.dropTable('goods')
}
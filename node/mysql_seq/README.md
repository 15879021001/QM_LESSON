1. yarn add env2 mysql2 sequelize sequelize-cli
2. 建 .env
-------------------------------------------------
          # 服务的启动名字和端口
          HOST = 127.0.0.1
          PORT = 3000

          # Mysql 数据库配置
          MYSQL_HOST = 127.0.0.1
          MYSQL_POST = 3306
          MYSQL_DB_NAME = eleme
          MYSQL_USERNAME = root
          MYSQL_PASSWORD = 123456
--------------------------------------------------
3. 建 .env.prod
--------------------------------------------------
          # 服务的启动名字和端口
          HOST = 127.0.0.1
          PORT = 3000

          # Mysql 数据库配置
          MYSQL_HOST = 127.0.0.1
          MYSQL_POST = 3306
          MYSQL_DB_NAME = eleme
          MYSQL_USERNAME = root
          MYSQL_PASSWORD = 123456
---------------------------------------------------
4. 对项目进行初始化mysql  sequelize 
 node_modules/.bin/sequelize init

5. 在congif.js 中引用
-----------------------------------------------------
          // 从.env 文件中读取数据库的配置信息
          // console.log(process.env.NODE_ENV)
          if (process.env.NODE_ENV === 'production') {
            require('env2')('./.env.prod');
          } else {
          require('env2')('./.env');
          }

          const { env } = process;

          module.exports = {
          "development": {
            "username": env.MYSQL_USERNAME,
            "password": env.MYSQL_PASSWORD,
            "database": env.MYSQL_DB_NAME,
            "host": env.MYSQL_HOST,
            "port": env.MYSQL_PORT,
            "dialect": "mysql",
            "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
          },  
          "production": {
            "username": env.MYSQL_USERNAME,
            "password": env.MYSQL_PASSWORD,
            "database": env.MYSQL_DB_NAME,
            "host": env.MYSQL_HOST,
            "port": env.MYSQL_PORT,
            "dialect": "mysql",
            "operatorsAliases": false, // 此参数为自行追加，解决高版本 sequelize 连接警告
          }
          }
-----------------------------------------------------------------

6. 创建数据库
   .\node_modules\.bin\sequelize db:create

8. 创建表文件
   .\node_modules\.bin\sequelize migration:create --name create-shops-table
7. 创建表
   .\node_modules\.bin\sequelize db:migrate
8. 建些测试数据 在seeders文件夹下
    .\node_modules\.bin\sequelize seed:create --name init-shops
9.  添加内容
    .\node_modules\.bin\sequelize db:seed:all
- 首先考虑安全
  数据库的连接信息 统一放到.env文件下来保存
  .gitignore 本地有 但不上传github

- sequelize 命令行
  sequelize-cli 这里创建集成mysql初始化
  1. init
   一个应用对应一个数据库 eleme DB_NAME
   使用sequelize工具来形象化mysql操作

  代码运行环境分为开发环境 (develop) , 线上环境 (production) 测试环境(test)
  process.env.NODE_ENV 设置当前环境是如何
  线上机器走 .env.prod
  本地开发走 .env 只需要有基本结构和一些数据
  env2 帮我们将 .env 逐行读取为配置

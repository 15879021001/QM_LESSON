1. 在create-react-app 中 使用 decorator (装饰器) 
   在node_modules下的 react-script>config>webpack.config.dev.js
   在plugins 中添加babel配置
   添加装饰器插件
    ["@babel/plugin-proposal-decorators",{"legacy":true}], 
    ["@babel/plugin-proposal-class-properties",{"loose":true}]
2. 然后再使用npm start 编译
3. create-react-app 中的webpack打包其实是在react-script包中实现。
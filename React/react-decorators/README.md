1. 在create-react-app 中 配置 decorator (装饰器) 
   在node_modules下的 react-script>config>webpack.config.dev.js
   在plugins 中添加babel配置
   添加装饰器插件
    ["@babel/plugin-proposal-decorators",{"legacy":true}], 
    ["@babel/plugin-proposal-class-properties",{"loose":true}]
2. 然后再使用npm start 编译
3. create-react-app 中的webpack打包其实是在react-script包中实现。

4. 在create-react-app 中 配置 styl
   在node_modules下的 react-script>config>webpack.config.dev.js
   在plugins 中添加babel配置
   在图片配置下添加以下代码
   {
            test: /\.styl$/,
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('stylus-loader')
            ]
          },


    在webpack.config.prods.js
    {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    Object.assign(
                        {
                            fallback: require.resolve('style-loader'),
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
                                        minimize: true,
                                        sourceMap: shouldUseSourceMap,
                                    },
                                },
                                {
                                  loader: require.resolve('stylus-loader'),
                                }
                            ],
                        },
                        extractTextPluginOptions
                    )
                ),
                // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
            },
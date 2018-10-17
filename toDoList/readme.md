- 模板中有 if else for（指令）
  模板里存在业务逻辑 wx:if wx:else wx:for

  界面状态 登陆前 登陆后状态

  数据驱动界面状态
  hasUserInfo 决定了界面有两种状态 wx:if wx:else

- 微信的生态及机制
  小程序，获取用户信任和信息
  小程序分享到微信的讨论组

  用户信息是隐私，使用需获取授权

  button 询问 特殊的 open-type="getUserInfo"
                    bindgetuserinfo="getUserInfo"
  block 显示的过程

- serData()
    改变data里数据的值

- wx:key
    循环一定要加一个唯一性的key
    列表值发生改变 
    key找到相应的那个进行更新。
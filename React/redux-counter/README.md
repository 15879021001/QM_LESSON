- 代码结构
  store 状态仓库
  
- 组件通信
  api

  统一状态树 Store 唯一

- store.getState() 读操作
- store.dispatch({type: 'INCREMENT'}) 可以委派一个action
  相应的reducer得以计算 返回新的状态
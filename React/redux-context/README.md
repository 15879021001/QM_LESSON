redux 解决了父子组件，兄弟组件间的传值麻烦的问题

context 跨组件传值
- context API redux 依靠它
  childContextTypes = {
    store: PropTypes.object
  }
  getChildContext(){
    return {store:{}}
  }

context 分为四步
- ChildContextTypes 顶层组件中规定类型
- getChildContext 顶层组件中设置数据
- 后代组件通过contextTypes 规定数据类型
- 后代组件this.context获取数据
api 代码重复
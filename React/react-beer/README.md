路由接管一切
按 URL 分发组件 （Page级别组件）
根路由App 
    -> 页面A级别组件(Page) ->(容器组件container -> 函数式组件(Present))
    -> path '/about'  页面B级别组件(Page) ->(容器组件container -> 函数式组件(Present))

- ref  react 里的id DOM 利用它找到JSX的片段
    React.createRef() 返回一个不重复的id
    this.searchRef.current

- context 最后一个大佬 component lifecycle state 函数式组件
   this.context.router.history.push('/search/:')
JSX 是 React 模板的语法
Component render()
函数式组件  return()

template 跟 vue 不一样 

1. JSX是一切组件的基础， 函数式组件，以返回 JSX 为目标
2. JSX真的就是JS 可以执行一切JS
3. React JSX React.createElement() 更优雅的表达可读性

JSX 用来描述UI信息， React.createElement()更能表达这点

不管是小程序 vue react 都是MVVM

JSX 不支持 wx:for

(
    <ul>
    {
        user.map((user,index) => <li key={index}>{user.name}</li>)
    }
    </ul>
)
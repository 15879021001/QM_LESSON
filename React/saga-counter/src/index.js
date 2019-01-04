import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Counter from './Counter'
import CreateSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reduxLogger from 'redux-logger'

const sagaMiddleware = CreateSagaMiddleware()
const store = createStore(reducer,applyMiddleware(reduxLogger,sagaMiddleware))
const action = type => store.dispatch({type})
// const doAsyncIncrement = () => {
//   setTimeout(() => {
//     action('INCREMENT_ASYNC')
//   }, 1000);
// }
sagaMiddleware.run(rootSaga)

function render(){
  ReactDOM.render(
        <Counter
          value={store.getState()}
          onIncrementAsync={()=>action('INCREMENT_ASYNC')}
          onIncrement={()=>action('INCREMENT') }
          onDecrement={()=>action('DECREMENT')}
        />,document.getElementById('root'))
}
render()
store.subscribe(render)


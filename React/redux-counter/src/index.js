import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter'

import counter from './reducers/index';

// 单独管理状态的地方
// 状态与UI 统一的， 状态计算器 reducer 
const store = createStore(counter);
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(<Counter 
                                        value={store.getState()}
                                        onIncrement={()=> store.dispatch({
                                          type:'INCREMENT'
                                        })}
                                        onDecrement={()=> store.dispatch({
                                          type:'DECREMENT'
                                        })}
                                        />,rootEl)
render()
store.subscribe(render)

// ReactDOM.render((<div>
//   {store.getState()}
// </div>), document.getElementById('root'));




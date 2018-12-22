import { ADD, DELETE } from '../constants/todos'
import { combineReducers } from 'redux'
const INITIAL_STATE = {
  todos:[
    {
      id:0,
      text:'第一条数据'
    }
  ]
}

function todos(state = INITIAL_STATE,action){
  let todoNum = state.todos.length
  switch(action.type){
    case ADD:
      return {
        ...state,
        todos:state.todos.concat({
          id:todoNum,
          text:action.data
        })
      }
      case DELETE:
      let newTodos = state.todos.filter(item => {
        return item.id !== action.id
      })

      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}

export default combineReducers({todos}) 
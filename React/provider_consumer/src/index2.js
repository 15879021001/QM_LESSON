// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  films: (state = [],action) => {
    let { type, payload } = action
    switch(type) {
      case 'GET_FILM_DATA':
        var newS = [...state]
        newS = payload
        return newS
      default:
        return state
    }
  }
})

const store = createStore(reducers)

function renderPage () {
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
}
renderPage()
store.subscribe(renderPage)
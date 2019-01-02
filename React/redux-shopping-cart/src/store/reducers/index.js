import { combineReducers } from 'redux'
import productReducer from './productReducer'
import floatCartReducer from './floatCartReducer'
import updateCartReducer from './updateCartReducer'

export default combineReducers({
  products: productReducer,
  cartProducts: floatCartReducer,
  cartTotal: updateCartReducer
  // sort: sortRedcuer,
  // filters: filterReducer
})
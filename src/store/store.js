import {  legacy_createStore as createStore} from 'redux'
import combineReducers from './combine'


 const store = createStore(combineReducers)
 export default  store;
 
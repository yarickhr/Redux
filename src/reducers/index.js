import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import login from './login'

export default combineReducers({
  page,
  user,
  login
})
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { reducer as formReducer } from 'redux-form'
import game from './game'

export default combineReducers({
  game,
  form: formReducer,
  router: routeReducer,
})

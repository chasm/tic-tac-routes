import { combineReducers, createStore } from 'redux'
import { routeReducer } from 'redux-simple-router'

import game from '../reducers/game.js'

const reducer = combineReducers(Object.assign({}, game, {
  routing: routeReducer,
}))

const store = createStore(reducer)

export default store

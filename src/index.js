import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import store from './store'
import HomeView from './views/home'
import GamesView from './views/games'

const history = createHistory()

syncReduxAndRouter(history, store)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={HomeView}>
          <Route path="/games/:id" component={GamesView}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

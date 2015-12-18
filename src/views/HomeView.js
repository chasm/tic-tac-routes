import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as gameActions } from '../redux/modules/game'

import PlayerForm from '../components/PlayerForm'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  game: state.game,
})

export class HomeView extends React.Component {
  static propTypes = {
    game: React.PropTypes.array.isRequired,
    move: React.PropTypes.func.isRequired,
  }

  render () {
    return (
      <div className="container text-center">
        <h1>Tic Tac Toe!</h1>
        <PlayerForm />
        <hr />
        <Link to="/games">Play Game</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, gameActions)(HomeView)

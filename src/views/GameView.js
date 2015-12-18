import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as gameActions } from '../redux/modules/game'

import Game from '../components/Game'

const mapStateToProps = (state) => ({
  game: state.game,
})

export class GameView extends React.Component {
  static propTypes = {
    game: React.PropTypes.array.isRequired,
    move: React.PropTypes.func.isRequired,
    undoMove: React.PropTypes.func.isRequired,
  }

  render () {
    return (
      <div className="container text-center">
        <Game {...this.props} />
        <hr />
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, gameActions)(GameView)

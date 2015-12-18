import React, { PropTypes } from 'react'
import { addIndex, flatten, contains, isEmpty, map } from 'ramda'
import { getBoard, checkForWin } from '../utils/board.js'

import Square from './square'

import './game.css'

const mapIndexed = addIndex(map)

const Game = ({}, { store }) => {
  const history = store.getState()[0]
  const board = getBoard(history)
  const wins = flatten(checkForWin(board))

  const renderBoard = (board, wins) => {
    return mapIndexed((player, idx) => {
      const props = { key: idx, square: idx }

      if (contains(idx, wins)) { props.win = true    }
      if (player)              { props.mark = player }

      return <Square {...props} />
    }, board)
  }

  return <div style={{ textAlign: 'center' }}>
    <div className={isEmpty(wins) ? 'board' : 'board won'}>
      {renderBoard(board, wins)}
    </div>
    <button
      onClick={() => store.dispatch({ type: 'NEW_GAME' })}>
      New Game
    </button>
    <button
      onClick={() => store.dispatch({ type: 'UNDO_MOVE' })}>
      Undo Move
    </button>
  </div>
}

Game.contextTypes = {
  store: PropTypes.object,
}

export default Game

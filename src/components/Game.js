import React, { PropTypes } from 'react'
import { addIndex, flatten, contains, isEmpty, map } from 'ramda'
import { getBoard, checkForWin } from '../utils/board.js'

import Square from './Square'

const mapIndexed = addIndex(map)

const Game = ({ game, move, undoMove }) => {
  const board = getBoard(game)
  const wins = flatten(checkForWin(board))

  const renderBoard = (board, wins) => {
    return mapIndexed((player, idx) => {
      const props = { key: idx, square: idx, move: move }

      if (contains(idx, wins)) { props.win = true    }
      if (player)              { props.mark = player }

      return <Square {...props} />
    }, board)
  }

  return <div style={{ textAlign: 'center' }}>
    <section className={isEmpty(wins) ? 'board' : 'board won'}>
      {renderBoard(board, wins)}
    </section>
    <button
      onClick={undoMove}>
      Undo Move
    </button>
  </div>
}

Game.contextTypes = {
  store: PropTypes.object,
}

export default Game

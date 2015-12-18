import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const MOVE = 'MOVE'
export const UNDO_MOVE = 'UNDO_MOVE'

// ------------------------------------
// Actions
// ------------------------------------
export const move = createAction(MOVE, square => square)
export const undoMove = createAction(UNDO_MOVE)

export const actions = {
  move,
  undoMove,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  MOVE: (state, { payload }) => [ ...state, payload ],
  UNDO_MOVE: (state) => [ ...state.slice(0, state.length - 1) ],
}, [])

import { filter, indexOf, reduce, repeat } from 'ramda'

const winPatterns = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ],
]

const getPlayer = (move, game) => {
  return (indexOf(move, game) % 2 === 0) ? 'x' : 'o'
}

const move = (game) => {
  return (memo, move) => {
    const player = getPlayer(move, game)

    return [
      ...memo.slice(0, move),
      player,
      ...memo.slice(move + 1),
    ]
  }
}

const getBoard = (game) => {
  const memo = repeat(false, 9)

  return reduce(move(game), memo, game)
}

const checkForWin = (board) => {
  return filter((pattern) => {
    const s1 = board[pattern[0]]
    const s2 = board[pattern[1]]
    const s3 = board[pattern[2]]

    return s1 && s1 === s2 && s2 === s3
  }, winPatterns)
}

export default {
  getBoard,
  checkForWin,
}

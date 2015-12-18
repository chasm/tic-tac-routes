import React, { PropTypes } from 'react'

const Square = ({ square, mark, win }, { store }) => {

  const handleClick = () => {
    store.dispatch({
      type: 'MOVE',
      square: square,
    })
  }

  return mark ?
    <div className={win ? `${mark} win` : mark}>{mark}</div> :
    <div onClick={handleClick}/>
}

Square.propTypes = {
  square: PropTypes.number.isRequired,
  mark: PropTypes.string,
  win: PropTypes.bool,
}

Square.defaultProps = {
  win: false,
}

Square.contextTypes = {
  store: PropTypes.object,
}

export default Square

import React from 'react'

const NumberDisplay = ({number}) => {
  return (
    <div>
      <span data-testid="number-display">{number}</span>
    </div>
  )
}

export default NumberDisplay
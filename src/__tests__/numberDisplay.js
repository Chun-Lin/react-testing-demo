import React from 'react'
import { render, cleanup } from '@testing-library/react'
import NumberDisplay from 'NumberDisplay'

afterEach(cleanup)

test('calling render with the same component on the same container does not remount', () => {
  const { getByTestId, rerender } = render(<NumberDisplay number={1} />)
  expect(getByTestId('number-display').textContent).toBe('1')

  // re-render the same component with different props
  rerender(<NumberDisplay number={2} />)
  expect(getByTestId('number-display').textContent).toBe('2')
})

test('<NumberDisplay> snapshot', () => {
  const { container } = render(<NumberDisplay number={1} />)
  expect(container).toMatchSnapshot()
})
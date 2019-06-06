import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import ControllLogin from 'ControllLogin'

afterEach(cleanup)

test('input 12345 on <Login>', () => {
  // Arrange
  const { getByLabelText } = render(<ControllLogin />)

  // Act
  const controlledInputNode = getByLabelText(/username/i)

  fireEvent.change(controlledInputNode, {
    target: { value: 'You have been controlled!' },
  })

  // Assert
  expect(controlledInputNode.value).toMatch('You have been controlled!')
})

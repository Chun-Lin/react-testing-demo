import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UncontrollLogin from 'UncontrollLogin'

test('input 12345 on <Login>', () => {
  const { getByLabelText } = render(<UncontrollLogin />)

  const controlledInputNode = getByLabelText(/username/i)

  fireEvent.change(controlledInputNode, {
    target: { value: 'You have been controlled!' },
  })

  expect(controlledInputNode.value).toMatch('You have been controlled!')
})

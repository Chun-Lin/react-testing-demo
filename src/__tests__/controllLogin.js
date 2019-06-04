import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import ControllLogin from 'ControllLogin'

afterEach(cleanup)

test('input 12345 on <Login>', () => {
  const { getByLabelText } = render(<ControllLogin />)

  const controlledInputNode = getByLabelText(/username/i)

  fireEvent.change(controlledInputNode, {
    target: { value: 'You have been controlled!' },
  })

  expect(controlledInputNode.value).toMatch('You have been controlled!')
})

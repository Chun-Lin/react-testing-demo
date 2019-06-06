import React from 'react'
import { render, cleanup } from '@testing-library/react'
import UncontrollLogin from 'UncontrollLogin'

afterEach(cleanup)

test('input 12345 on <Login>', () => {
  // Arrage
  const { getByLabelText } = render(<UncontrollLogin />)

  // Act
  const usernameNode = getByLabelText(/username/i)

  usernameNode.value = '12345'

  // Assert
  expect(usernameNode.value).toMatch('12345')
})

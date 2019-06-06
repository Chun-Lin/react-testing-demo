import React from 'react'
import { render, cleanup } from '@testing-library/react'
import UncontrollLogin from 'UncontrollLogin'

afterEach(cleanup)

test('input 12345 on <Login>', () => {
  const { getByLabelText } = render(<UncontrollLogin />)

  const usernameNode = getByLabelText(/username/i)

  usernameNode.value = '12345'

  expect(usernameNode.value).toMatch('12345')
})

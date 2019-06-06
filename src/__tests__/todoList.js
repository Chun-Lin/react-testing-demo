import React from 'react'
import axios from 'axios'
import { render, fireEvent, wait } from '@testing-library/react'
import TodoList from 'TodoList'

jest.mock('axios')

test('should show the task', async () => {
  // Render the component
  const { getByTestId } = render(<TodoList />)

  // Mock response data
  const task = {
    userId: 1,
    id: 1,
    title: 'React Testing',
    completed: false,
  }
  const response = {
    data: task,
  }
  axios.get.mockResolvedValue(response)
  
  // Click the button
  const buttonNode = getByTestId('task-button')
  const leftClick = { button: 0 }
  fireEvent.click(buttonNode, leftClick)

  // Wait for the response
  await wait(()=> getByTestId('task-name'))
  
  // Assert
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(getByTestId('task-name').textContent).toEqual('X React Testing')
})

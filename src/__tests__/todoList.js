import React from 'react'
import axios from 'axios'
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'
import TodoList from 'TodoList'

jest.mock('axios')

test('should show the task', async () => {
  const { getByTestId, getByText, container } = render(<TodoList />)

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
  
  const buttonNode = getByTestId('task-button')
  const leftClick = { button: 0 }
  fireEvent.click(buttonNode, leftClick)

  await wait(()=> getByTestId('task-name'))
  
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(getByTestId('task-name').textContent).toEqual('X React Testing')
})

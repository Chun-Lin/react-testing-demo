import React from 'react'
import axios from 'axios'
import './TodoList.css'

export default class TodoList extends React.Component {
  state = {
    todoItem: {},
  }

  // componentDidMount = async () => {
  //   const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(todo)
  //   this.setState((prevState, props) => ({
  //     todoItem: todo.data,
  //   }))
  // }

  clickHandler = async () => {
    const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(todo)
    this.setState((prevState, props) => ({
      todoItem: todo.data,
    }))
  }

  render() {
    const { title, completed } = this.state.todoItem

    return (
      <div>
        <div className="todo__wrapper">
          <button
            className="todo__button todo__button--style"
            onClick={this.clickHandler}
          >
            Let's get a task!
          </button>

          {title ? (
            <div className="todo__task todo__task--style">
              {completed ? 'V' : 'X'} {title}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

import React from 'react'

export default class UncontrollLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  changeHandler = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <label htmlFor="username-input">
          username
        </label>
        <input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{ flex: 1 }}
        />
      </div>
    )
  }
}

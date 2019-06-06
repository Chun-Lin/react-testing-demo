import React from 'react'
import './UncontrollLogin.css'
export default class ControllInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <>
        <label htmlFor="username-input">Username</label>
        <input id="username-input" placeholder="Username..." name="username" />
      </>
    )
  }
}

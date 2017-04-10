import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { login } from '../../api.js'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    // something for redirect here if user logged in
  }

  onSubmit({ email, password }) {
    login(email, password)
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default LoginForm

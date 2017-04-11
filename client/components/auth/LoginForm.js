import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { login } from './api.js'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
  }

  onSubmit({ email, password }) {
    login(email, password).then(function(result){
      if(result.error) {
        alert(result.error)
      } else if(result.user) {
        alert('success!')
        //TODO: Add redirect after routing
      } else {
        alert("Internal server error.")
      }
    })
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

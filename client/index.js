import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/auth/LoginForm'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/api/graphql',
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id
    }
    return null
  }
})

// sets jwt token header
networkInterface.use([{
  applyMiddleware(req, next) {
    const token = localStorage.getItem('jwt')
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

// handles unauthorized response
networkInterface.useAfter([{
  applyAfterware(response, next) {
    if(response.response.status === 401) {
      alert("oops, you're not authenticated")
      //TODO: redirect to login
    }
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <LoginForm />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)

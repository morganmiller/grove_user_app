import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/auth/LoginForm'

const Root = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

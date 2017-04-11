import axios from 'axios'

const apiRoot = 'http://localhost:3000/api'
// TODO: ENV variables

function login(email, password) {
  return new Promise((resolve, reject) => {
    axios.post(apiRoot+'/login', {
      auth: {email, password}
    })
    .then(function(response){
      localStorage.setItem("jwt" , response.data.user.jwt)
      resolve(response.data)
    })
    .catch(function(response){
      resolve({error: response.response.data.error})
    })
  })
}

// TODO: signup, logout

export { login }

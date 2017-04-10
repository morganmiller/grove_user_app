import axios from 'axios'

const apiRoot = 'http://localhost:3000/api'
// TODO: ENV variables

function login(email, password) {
  axios.post(apiRoot+'/login', {
    auth: {email, password}
  })
  .then(function(response){
    console.log("LOGIN SUCCESS")
    console.log(response)
  })
  .catch(function(error){
    console.log("LOGIN ERROR")
    console.log(error)
  })
}

export { login }

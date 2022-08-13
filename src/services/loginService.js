const API = 'https://taller-movil-backend.herokuapp.com/login'
// const API = 'https://stormy-journey-41994.herokuapp.com/login'


export default function loginService({ username, password }) {
  const [usernameT, passwordT] = [username.trim(), password.trim()]
  //Para quitar los espacios en blanco
  // console.log({usernameT, passwordT})
  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      correo: usernameT,
      password: passwordT
    })
  }).then(res => res.json())
    .then(res => res)
}
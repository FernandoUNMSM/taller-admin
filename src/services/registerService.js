const API = 'http://localhost:3001/register'
// const API = 'https://stormy-journey-41994.herokuapp.com/register'

export default function loginService({ username, name, password }) {
  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, name, password})
  }).then(res => res.json())
    .then(res => console.log(res))
}
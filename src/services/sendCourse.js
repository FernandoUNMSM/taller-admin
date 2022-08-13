const API = 'http://localhost:3001/courses'
// const API = 'https://stormy-journey-41994.herokuapp.com/courses'

export default function sendCourse({name}) {
  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    },
    body: JSON.stringify({name})
  }).then(res => res.json())
    .then(res => res)
}
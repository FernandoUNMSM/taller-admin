const API = 'https://taller-movil-backend.herokuapp.com/users'
const API2 = 'https://taller-movil-backend.herokuapp.com/incidencias'

export default function getCourses() {
  return fetch(API, {
  }).then(res => res.json())
    .then(res => res)
}

export function getIncidencias() {
  return fetch(API2, {
  }).then(res => res.json())
    .then(res => res)
}
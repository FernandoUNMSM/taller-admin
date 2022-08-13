import React from 'react'
import { CourseContainer } from '../course/styles'

function Inci({ course }) {
  const deleteuser = () => {
    return fetch(`https://taller-movil-backend.herokuapp.com/incident/${course.id_incidencias}`, {
      method: 'DELETE',
    }).then(res => res.json())
    //   .then(res =>
    //     getCourses().then(res => setCourses(res.list))
    // )
  }
  return (
    <>
      <CourseContainer>
        <div className="left">
          <div className="userItem">
            <p><span>Titulo:</span> {course.titulo}</p>
          </div>
          <div className="userItem">
            <p><span>Lugar:</span> {course.lugar}</p>
          </div>
        </div>
        <div className="right">
          <div className="userItem">
            <p><span>Categoria:</span> {course.categoria}</p>
          </div>
          <div className="userItem">
            <p><span>Descripcion:</span> {course.descripcion}</p>
          </div>
        </div>
        <div className="delete">
          <button onClick={deleteuser}>Delete</button>
        </div>
      </CourseContainer>
    </>
  )
}

export default React.memo(Inci)

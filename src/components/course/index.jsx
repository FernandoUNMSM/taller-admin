import React from 'react'
import getCourses from './../../services/getCourses'
import { CourseContainer } from './styles'

function Course({ course, setCourses }) {
  const deleteuser = () => {
    return fetch(`https://taller-movil-backend.herokuapp.com/users/${course.usuario_id}`, {
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
            <p><span>Facultad:</span> {course.facultad}</p>
          </div>
          <div className="userItem">
            <p><span>Escuela:</span> {course.escuela}</p>
          </div>
        </div>
        <div className="right">
          <div className="userItem">
            <p><span>Nombre:</span> {course.name}</p>
          </div>
          <div className="userItem">
            <p><span>Correo:</span> {course.email}</p>
          </div>
        </div>
        <div className="delete">
          <button onClick={deleteuser}>Delete</button>
        </div>
      </CourseContainer>
    </>
  )
}

export default React.memo(Course)

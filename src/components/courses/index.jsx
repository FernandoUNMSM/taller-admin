import React, { useEffect, useState } from "react";
import getCourses from "./../../services/getCourses";
import sendCourse from './../../services/sendCourse'
import Course from '../course'
import {CoursesContainer, Container} from './styles'

export default function Courses({}) {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then(res => setCourses(res.list))
  },[])

  return (
    <>
      <CoursesContainer>
        {/* <form className="saveCourse" onSubmit={handleCourse}>
          <input type="text" id='course' required/>
          <button>Añadir</button>
        </form> */}
        {/* <Container> */}
          {
            courses.map((course, index) =>
              <Course course={course} setCourses={setCourses}/>
            )
          }
        {/* </Container> */}
      </CoursesContainer>
    </>
  );
}

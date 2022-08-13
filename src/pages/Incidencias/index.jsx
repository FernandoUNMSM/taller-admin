import React, { useEffect, useState } from 'react'
import { getIncidencias } from './../../services/getCourses';
import { WorkspaceContainer } from "../Workspace/styles";
import MenuWorkspace from './../../components/MenuWorkspace'
import Incidencia from './../../components/incidencia';
import { CoursesContainer } from './../../components/courses/styles';

export default function Incidencias({ }) {
  const [courses, setCourses] = useState([])


  useEffect(() => {
    getIncidencias().then(res => setCourses(res.incidencias))
  }, [])

  return (
    <>
      <WorkspaceContainer>
        {/* <div className='p'>jhjhg</div> */}
        <MenuWorkspace></MenuWorkspace>
        {/* <Courses></Courses> */}
        <CoursesContainer>

          {
            courses.map((course, index) =>
              <Incidencia course={course} />
            )
          }
        </CoursesContainer>
      </WorkspaceContainer>
    </>
  );
}
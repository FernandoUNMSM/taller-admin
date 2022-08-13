import React from "react";
import { WorkspaceContainer } from "./styles";
import Courses from "./../../components/courses";
import MenuWorkspace from './../../components/MenuWorkspace'

export default function Workspace({}) {
  return (
    <>
      <WorkspaceContainer>
        {/* <div className='p'>jhjhg</div> */}
        <MenuWorkspace></MenuWorkspace>
        <Courses></Courses>
      </WorkspaceContainer>
    </>
  );
}

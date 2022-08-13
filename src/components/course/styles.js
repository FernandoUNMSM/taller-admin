import styled from "styled-components";

export const CourseContainer = styled.div`
  align-items: center;
  /* background-color: #AFA; */
  /* color: white; */
  display: flex;
  height: 100px;
  width: 100%;
  padding-left: 20px;
  align-items: center;
  border-bottom: 1px solid #000;
  p{
    margin: 0;
  }
  & > div {
    width: 40%;
  }
  span {
    font-weight: bold;
  }
  .delete{
    width: 20%;
    button{
      border: none;
      outline: none;
      background-color: rgb(29, 29, 31);
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      padding: 5px 30px;
      border: 2px solid rgb(29, 29, 31);
      cursor: pointer;
      transition: .3s;
      &:hover{
        background-color: #fff;
        color: rgb(29, 29, 31);
      }
    }
  }
`
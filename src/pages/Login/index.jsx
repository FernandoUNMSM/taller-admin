import React from 'react'
import LoginForm from './../../components/Login'
import {LoginContainer, LoginWindow, Img} from './styles.js'

export default function Login ({}){
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <LoginForm></LoginForm>
          <Img path='https://www.holmeshr.com/wp-content/uploads/2021/07/Reporte-de-incidencias_-como-y-por-que-debo-realizarlo.jpg'></Img>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}
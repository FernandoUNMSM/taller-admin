import React from 'react'
import LoginForm from './../../components/Login'
import {LoginContainer, LoginWindow, Img} from './styles.js'

export default function Login ({}){
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <LoginForm></LoginForm>
          <Img path='https://www.verywellfamily.com/thmb/YbJV_oWFuN8xPwhl68KeCzXF-gM=/1911x1433/smart/filters:no_upscale()/GettyImages-175452558-589a4cd83df78caebc7ebc63.jpg'></Img>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}
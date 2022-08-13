import React from 'react'
import {LoginContainer, LoginWindow, Img} from './../Login/styles.js'
import RegisterForm from './../../components/Register'

export default function Register ({}){
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <Img path='https://assets.change.org/photos/9/hh/do/CHhhdOGyArMSCew-800x450-noPad.jpg?1528566008'></Img>
          <RegisterForm></RegisterForm>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}
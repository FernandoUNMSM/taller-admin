import React from 'react'
import { useForm } from 'react-hook-form'
// import { ErrorMessage } from '@hookform/error-message';
import {Form, FormContainer, Title, Button} from './../Login/styles'
import {InputRegisterContainer} from './styles'
import {Link} from 'react-router-dom'
import registerService from './../../services/registerService'
import Input from './../Input'


export default function RegisterForm ({}){
  const { handleSubmit, register, formState: { errors } } = useForm()

  const onSumbit = (data, e) => {
    e.preventDefault()
    //data => {username, name, password}
    registerService(data)
  }
  const onError = (errors, e) => {
    const errorInputs = Object.keys(errors)
    errorInputs.forEach(input => console.log(errors[input].ref))
  };

  return (
    <>
     <FormContainer>
        <Form onSubmit={handleSubmit(onSumbit, onError)}>
          <Title>Registro</Title>
          <InputRegisterContainer>
            <Input
              name='username'
              label='Usuario'
              {...register('username', {required: 'username is required'})}
            />
            <Input
              name='name'
              label='Nombre'
              {...register('name', {required: 'username is required'})}
            />
            <Input
              name='password'
              label="Contraseña"
              {...register('password', {required: 'password is required'})}
            />

            <Input
              name='passwordC'
              label="Confirmar contraseña"
              {...register('passwordC', {required: 'password is required'})}
            />
          </InputRegisterContainer>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button type='submit'>Registrate</Button>
            <span style={{marginTop: '10px', fontSize: '12px'}}>¿Ya tienes una cuenta? <Link to='/login'>Logeate</Link></span>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}
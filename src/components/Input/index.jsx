import React from 'react'
import {InputContainer, Input, Label} from './styles'

function MyInput({name, label, ...rest }, ref) {
  return (
    <>
      <InputContainer>
        <Input
          autoComplete="off"
          name={name}
          type={(name.includes('password')) ? 'password' : 'text'}
          required
          {...rest}
        />
        <Label>
          <span>{label}</span>
        </Label>
      </InputContainer>
    </>
  )
}
export default React.forwardRef(MyInput)
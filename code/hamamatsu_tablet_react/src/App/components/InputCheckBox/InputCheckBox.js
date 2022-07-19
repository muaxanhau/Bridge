import React from 'react'
import { Input } from './elements'

const InputCheckBox = React.forwardRef(({ id = '', ...rest }, ref) => {
  return <Input ref={ref} type='checkbox' id={id} {...rest} />
})

export default InputCheckBox

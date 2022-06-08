import React from 'react'
import { InputC } from './elements'

const InputText = React.forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      style,
      disableBorder = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <InputC
        placeholder={placeholder || (disableBorder ? 'Aa...' : '')}
        disabled={disabled}
        ref={ref}
        type={type}
        style={style}
        disableBorder={disableBorder}
        {...rest}
      />
    )
  }
)

export default InputText

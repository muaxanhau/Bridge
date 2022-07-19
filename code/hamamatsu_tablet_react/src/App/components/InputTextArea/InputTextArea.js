import React from 'react'
import { TextArea } from './elements'

const InputTextArea = React.forwardRef(
  (
    { cols = 20, rows = 4, style = {}, disableBorder = false, ...rest },
    ref
  ) => {
    return (
      <TextArea
        cols={cols}
        rows={rows}
        style={style}
        placeholder={disableBorder ? 'Aa...' : ''}
        disableBorder={disableBorder}
        ref={ref}
        {...rest}
      />
    )
  }
)

export default InputTextArea

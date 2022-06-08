import React from 'react'
import { Select } from './elements'

const InputSelection = React.forwardRef(({ data = [], ...rest }, ref) => {
  return (
    <Select ref={ref} {...rest}>
      {data.map((item, _) => (
        <option key={_.toString()} value={Object.values(item)[0]}>
          {Object.values(item)[1]}
        </option>
      ))}
    </Select>
  )
})

export default InputSelection

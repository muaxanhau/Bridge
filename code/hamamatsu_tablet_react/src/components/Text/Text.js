import React from 'react'
import { P } from './elements'

const Text = ({ children, style }) => {
  return <P style={style}>{children}</P>
}

export default Text

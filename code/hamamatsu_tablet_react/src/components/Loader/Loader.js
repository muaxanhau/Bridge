import React, { useContext } from 'react'
import { String } from './../../constants'
import { AppContext } from './../../globalStates/AppProvider'
import { Container, Ring } from './elements'
import Title from './../Title/Title'

// constants
const TEXT_COLOR = 'var(--color-9)'

// main
const Loader = () => {
  const { stateLoader } = useContext(AppContext)

  if (stateLoader.isLoading === 0) {
    return null
  }

  return (
    <Container>
      <Ring>
        <Title style={{ color: TEXT_COLOR }}>{String.loading}</Title>
      </Ring>
    </Container>
  )
}

export default Loader

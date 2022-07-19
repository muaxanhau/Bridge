import React, { useContext } from 'react'
import { String } from './../../constants'
import { AppContext } from './../../globalStates/AppProvider'
import { Container, Ring } from './elements'
import Title from './../Title/Title'
import { useSQLiteIsRunning } from './../../../SQLite'

// constants
const TEXT_COLOR = 'var(--color-9)'

// main
const Loader = () => {
  const { stateLoader } = useContext(AppContext)
  const isSQLiteRuning = useSQLiteIsRunning()

  if (stateLoader.isLoading === 0 && !isSQLiteRuning) {
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

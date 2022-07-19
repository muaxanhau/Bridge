import React, { useReducer, createContext } from 'react'
import * as actions from './actions'
import { reducer } from './reducer'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export const AppContext = createContext()

const initialStates = {
  loader: {
    isLoading: 0
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const value = {
    stateLoader: state.loader,

    //=================================================================
    loaderTurnOn: () => dispatch({ type: actions.LOADER_TURN_ON }),
    loaderTurnOff: () => dispatch({ type: actions.LOADER_TURN_OFF })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </QueryClientProvider>
  )
}

export default AppProvider

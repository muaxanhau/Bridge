import * as actions from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADER_TURN_ON: {
      return {
        ...state,
        loader: {
          ...state.loader,
          isLoading: ++state.loader.isLoading
        }
      }
    }
    case actions.LOADER_TURN_OFF: {
      return {
        ...state,
        loader: {
          ...state.loader,
          isLoading: state.loader.isLoading > 0 && --state.loader.isLoading
        }
      }
    }
    default:
      return state
  }
}

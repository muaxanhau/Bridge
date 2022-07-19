export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST_BRIDGE':
      return {
        ...state,
        dataListBridge: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBridge
      }
    case 'MINIMIZE':
      return {
        ...state,
        isMinimize: true
      }
    case 'MAXIMIZE':
      return {
        ...state,
        isMinimize: false
      }
    case 'SET_INDEX':
      return {
        ...state,
        index: action.payload
      }
    default:
      return state
  }
}

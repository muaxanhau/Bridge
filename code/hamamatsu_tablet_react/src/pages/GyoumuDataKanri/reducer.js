export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST_GYOUMU_1':
      return {
        ...state,
        dataListGyoumu1: Array.isArray(action.payload)
          ? action.payload
          : state.dataListGyoumu1
      }
    case 'SET_DATA_LIST_GYOUMU_2':
      return {
        ...state,
        dataListGyoumu2: Array.isArray(action.payload)
          ? action.payload
          : state.dataListGyoumu2
      }
    default:
      return state
  }
}

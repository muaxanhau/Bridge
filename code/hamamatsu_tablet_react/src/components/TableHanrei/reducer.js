export const reducer = (state, action) => {
  switch (action.type) {
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
    case 'TOGGLE_FLG_TABLET':
      return {
        ...state,
        flgTablet: state.flgTablet === 1 ? 0 : 1
      }
    case 'SET_DATA_LIST_SHINDAN':
      return {
        ...state,
        dataListShindan: Array.isArray(action.payload)
          ? action.payload
          : state.dataListShindan
      }
    default:
      return state
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_POPUP_GYOUMU_LIST':
      return {
        ...state,
        showPopupGyoumuList: true
      }
    case 'HIDE_POPUP_GYOUMU_LIST':
      return {
        ...state,
        showPopupGyoumuList: false
      }
    case 'SET_DATA_LIST_GYOUMU':
      return {
        ...state,
        dataListGyoumu: Array.isArray(action.payload)
          ? action.payload
          : state.dataListGyoumu
      }
    default:
      return state
  }
}

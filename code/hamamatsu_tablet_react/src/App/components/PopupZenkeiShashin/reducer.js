export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: true
      }
    case 'HIDE_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: false
      }
    case 'SET_TXTA_SHOKENTOU':
      return {
        ...state,
        txtaShokentou: action.payload
      }
    default:
      return state
  }
}

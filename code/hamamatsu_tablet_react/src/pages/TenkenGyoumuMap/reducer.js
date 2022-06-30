export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEADER_NAME':
      return {
        ...state,
        headerName: action.payload
      }
    case 'SET_DATA_LIST_BRIDGE_ROOT':
      return {
        ...state,
        dataListBridgeRoot: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBridgeRoot
      }
    case 'SET_DATA_LIST_BRIDGE_FILTERED':
      return {
        ...state,
        dataListBridgeFiltered: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBridgeFiltered
      }
    case 'SET_DATA_LIST_SHINDAN_CHECKED':
      return {
        ...state,
        dataListShindanChecked: Array.isArray(action.payload)
          ? action.payload
          : state.dataListShindanChecked
      }
    case 'SET_FLG_TABLET':
      return {
        ...state,
        flgTablet: parseInt(action.payload) || 0
      }
    case 'SET_LAT_LNG':
      return {
        ...state,
        currentLat: action.payload.currentLat || state.currentLat,
        currentLng: action.payload.currentLng || state.currentLng
      }
    default:
      return state
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_HEADER':
      return {
        ...state,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblKanrishamei: action.payload.lblKanrishamei || state.lblKanrishamei,
        lblTenkenin: action.payload.lblTenkenin || state.lblTenkenin,
        lblTenkenNengappi:
          action.payload.lblTenkenNengappi || state.lblTenkenNengappi
      }
    case 'SET_DATA_LIST_SHINDAN':
      return {
        ...state,
        dataListShindan: Array.isArray(action.payload)
          ? action.payload
          : state.dataListShindan
      }
    case 'SET_DATA_LIST_GAZOU_TMP':
      return {
        ...state,
        dataListGazouTmp: Array.isArray(action.payload)
          ? action.payload
          : state.dataListGazouTmp
      }
    case 'SHOW_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: true,
        image: action.payload
      }
    case 'HIDE_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: false,
        image: null
      }
    default:
      return state
  }
}

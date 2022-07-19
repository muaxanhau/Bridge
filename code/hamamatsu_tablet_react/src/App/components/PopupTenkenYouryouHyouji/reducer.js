export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST_IMAGE':
      return {
        ...state,
        dataListImage: Array.isArray(action.payload)
          ? action.payload
          : state.dataListImage
      }
    case 'SET_DATA_LIST_M_BUZAI_ZAIRYOU':
      return {
        ...state,
        dataListBuzai: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBuzai
      }
    case 'SET_DATA_LIST_M_DAMAGE_SHURUI':
      return {
        ...state,
        dataListMDamageShurui: Array.isArray(action.payload)
          ? action.payload
          : state.dataListMDamageShurui
      }
    case 'SET_DATA_LIST_M_SHINDAN':
      return {
        ...state,
        dataListMShindan: Array.isArray(action.payload)
          ? action.payload
          : state.dataListMShindan
      }
    case 'INCREACE_INDEX_IMAGE_SELECTED':
      return {
        ...state,
        indexImageSelected:
          state.indexImageSelected === state.dataListImage.length - 1
            ? state.indexImageSelected
            : ++state.indexImageSelected
      }
    case 'DECREACE_INDEX_IMAGE_SELECTED':
      return {
        ...state,
        indexImageSelected:
          state.indexImageSelected === 0
            ? state.indexImageSelected
            : --state.indexImageSelected
      }
    case 'SET_INDEX_IMAGE_SELECTED':
      return {
        ...state,
        indexImageSelected: action.payload
      }
    case 'SHOW_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: true,
        imagePopupSrc: action.payload
      }
    case 'HIDE_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: false,
        imagePopupSrc: null
      }

    default:
      return state
  }
}

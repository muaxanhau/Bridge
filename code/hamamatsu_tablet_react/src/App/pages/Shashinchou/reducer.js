export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_HEADER':
      return {
        ...state,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblKanrishamei: action.payload.lblKanrishamei || state.lblKanrishamei,
        lblHeader: action.payload.lblHeader || state.lblHeader,
        selectedDate: action.payload.selectedDate || state.lblHeader
      }
    case 'SET_IMG_ZENKEI_SHASHIN':
      return {
        ...state,
        imgZenkeiShashinLeft:
          action.payload.imgZenkeiShashinLeft || state.imgZenkeiShashinLeft,
        imgZenkeiShashinRight:
          action.payload.imgZenkeiShashinRight || state.imgZenkeiShashinRight
      }
    case 'SET_IMG_SONSHOU_SHASHIN':
      return {
        ...state,
        imgListSonshouShashinLeft: action.payload.imgListSonshouShashinLeft
          ? Array.isArray(action.payload.imgListSonshouShashinLeft)
            ? action.payload.imgListSonshouShashinLeft
            : state.imgListSonshouShashinLeft
          : state.imgListSonshouShashinLeft,
        imgListSonshouShashinRight: action.payload.imgListSonshouShashinRight
          ? Array.isArray(action.payload.imgListSonshouShashinRight)
            ? action.payload.imgListSonshouShashinRight
            : state.imgListSonshouShashinRight
          : state.imgListSonshouShashinRight
      }

    //==================================================
    case 'SHOW_DATE_PICKER_POPUP':
      return {
        ...state,
        showDatePickerPopup: true
      }
    case 'HIDE_DATE_PICKER_POPUP':
      return {
        ...state,
        showDatePickerPopup: false
      }
    case 'SHOW_ZENKEI_SHASHIN_POPUP':
      return {
        ...state,
        showZenkeiShashinPopup: true
      }
    case 'HIDE_ZENKEI_SHASHIN_POPUP':
      return {
        ...state,
        showZenkeiShashinPopup: false
      }
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
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload
      }
    case 'SHOW_PHOTO_TYPE_SELECTION_POPUP':
      return {
        ...state,
        isAutoStoreImage: !!action.payload,
        showPhotoTypeSelectionPopup: true
      }
    case 'HIDE_PHOTO_TYPE_SELECTION_POPUP':
      return {
        ...state,
        showPhotoTypeSelectionPopup: false
      }
    case 'SHOW_SON_SHOU_SHANHIN_POPUP':
      return {
        ...state,
        showSonshouShanhinPopup: true,
        gazouIDSelected: action.payload
      }
    case 'HIDE_SON_SHOU_SHANHIN_POPUP':
      return {
        ...state,
        showSonshouShanhinPopup: false,
        gazouIDSelected: null
      }
    case 'SET_TMP_BASE_64_IMAGE':
      return {
        ...state,
        tmpBase64Image: action.payload
      }
    default:
      return state
  }
}

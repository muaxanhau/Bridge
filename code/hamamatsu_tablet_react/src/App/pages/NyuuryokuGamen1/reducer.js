export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST_SHINDAN':
      return {
        ...state,
        dataListShindan: Array.isArray(action.payload)
          ? action.payload
          : state.dataListShindan
      }
    case 'SET_GROUP_1':
      return {
        ...state,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblIdo: action.payload.lblIdo || state.lblIdo,
        lblKeido: action.payload.lblKeido || state.lblKeido,
        lblKyouryouID: action.payload.lblKyouryouID || state.lblKyouryouID,
        lblShozaichi: action.payload.lblShozaichi || state.lblShozaichi,
        lblKanrishamei: action.payload.lblKanrishamei || state.lblKanrishamei,
        selectedDate0: action.payload.date || state.selectedDate0
      }
    case 'SET_GROUP_3':
      return {
        ...state,
        lblKasetsuNenji:
          action.payload.lblKasetsuNenji || state.lblKasetsuNenji,
        lblHashinaga: action.payload.lblHashinaga || state.lblHashinaga,
        lblDouroFukuin: action.payload.lblDouroFukuin || state.lblDouroFukuin,
        lblKyouryouKeishiki:
          action.payload.lblKyouryouKeishiki || state.lblKyouryouKeishiki,
        image: action.payload.image || state.image
      }
    //==========================================
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
    case 'SET_INDEX_DATE_PICKER':
      return {
        ...state,
        indexDatePicker: action.payload
      }
    case 'RESET_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: undefined
      }
    case 'SET_SELECTED_DATE_0':
      return {
        ...state,
        selectedDate0: action.payload
      }
    case 'SET_SELECTED_DATE_0_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate0
      }
    case 'SET_SELECTED_DATE_1':
      return {
        ...state,
        selectedDate1: action.payload
      }
    case 'SET_SELECTED_DATE_1_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate
      }
    case 'SET_SELECTED_DATE_2':
      return {
        ...state,
        selectedDate2: action.payload
      }
    case 'SET_SELECTED_DATE_2_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate2
      }
    case 'SET_SELECTED_DATE_3':
      return {
        ...state,
        selectedDate3: action.payload
      }
    case 'SET_SELECTED_DATE_3_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate3
      }
    case 'SET_SELECTED_DATE_4':
      return {
        ...state,
        selectedDate4: action.payload
      }
    case 'SET_SELECTED_DATE_4_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate4
      }
    case 'SET_SELECTED_DATE_5':
      return {
        ...state,
        selectedDate5: action.payload
      }
    case 'SET_SELECTED_DATE_5_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate5
      }
    case 'SET_SELECTED_DATE_99':
      return {
        ...state,
        selectedDate99: action.payload
      }
    case 'SET_SELECTED_DATE_99_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate99
      }
    case 'SHOW_IMAGE_POPUP':
      return {
        ...state,
        showImagePopup: true
      }
    case 'HIDE_IMAGE_POPUP':
      return {
        ...state,
        showImagePopup: false
      }
    default:
      return state
  }
}

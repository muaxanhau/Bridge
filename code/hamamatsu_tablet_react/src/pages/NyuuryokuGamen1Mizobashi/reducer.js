export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_KIROKU_YOSHIKI':
      return {
        ...state,
        lblIdo: action.payload.lblIdo || state.lblIdo,
        lblKeido: action.payload.lblKeido || state.lblKeido,
        lblKyouryouID: action.payload.lblKyouryouID || state.lblKyouryouID
      }
    //==============================================
    case 'SET_GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO':
      return {
        ...state,
        lblFurigana: action.payload.lblFurigana || state.lblFurigana,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblShozaichiJi: action.payload.lblShozaichiJi || state.lblShozaichiJi,
        lblShozaichiItari:
          action.payload.lblShozaichiItari || state.lblShozaichiItari,
        lblKyoriHyouJi: action.payload.lblKyoriHyouJi || state.lblKyoriHyouJi,
        lblKyoriHyouItari:
          action.payload.lblKyoriHyouItari || state.lblKyoriHyouItari,
        lblKasetsuNenji0:
          action.payload.lblKasetsuNenji0 || state.lblKasetsuNenji0,
        lblHashinaga: action.payload.lblHashinaga || state.lblHashinaga,
        lblFukuin: action.payload.lblFukuin || state.lblFukuin,
        lblKeishiki: action.payload.lblKeishiki || state.lblKeishiki,
        lblKanrisha: action.payload.lblKanrisha || state.lblKanrisha,
        lblKyouryouCode:
          action.payload.lblKyouryouCode || state.lblKyouryouCode,
        lblKasetsuNenji1:
          action.payload.lblKasetsuNenji1 || state.lblKasetsuNenji1
      }
    //==============================================
    case 'SET_GROUP_MUKURO_TAI_SUNPO_OYOBI_ZENKEI_SHASHIN':
      return {
        ...state,
        lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin:
          action.payload.lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin ||
          state.lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin,
        lblHashinagaMukurotaiSunpouOyobiZenkeiShashin:
          action.payload.lblHashinagaMukurotaiSunpouOyobiZenkeiShashin ||
          state.lblHashinagaMukurotaiSunpouOyobiZenkeiShashin,
        lblDouroFukuin: action.payload.lblDouroFukuin || state.lblDouroFukuin,
        lblKyouryouKeishiki:
          action.payload.lblKyouryouKeishiki || state.lblKyouryouKeishiki
      }

    //==============================================
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
    default:
      return state
  }
}

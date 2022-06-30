export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_KIROKU_YOSHIKI':
      return {
        ...state,
        lblIdo: action.payload.lblIdo || state.lblIdo,
        lblKeido: action.payload.lblKeido || state.lblKeido,
        lblKyouryouID: action.payload.lblKyouryouID || state.lblKyouryouID
      }
    case 'SET_GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO':
      return {
        ...state,
        lblFurigana: action.payload.lblFurigana || state.lblFurigana,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblKanrisha: action.payload.lblKanrisha || state.lblKanrisha,
        lblKyouryouCode: action.payload.lblKyouryouCode || state.lblKyouryouCode
      }

    default:
      return state
  }
}

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
    case 'SET_DATA_LIST_TENKENHYOU_GENKYOU':
      return {
        ...state,
        dataListTenkenhyouGenkyou: Array.isArray(action.payload)
          ? action.payload
          : state.dataListTenkenhyouGenkyou
      }
    default:
      return state
  }
}

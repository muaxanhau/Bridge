import React, { useReducer, useEffect } from 'react'
import { String, Images, DummyData } from '../../constants'
import {} from './elements'
import {
  Styled,
  Text,
  ButtonType1,
  InputText,
  InputSelection,
  ButtonType4,
  PopupDatePicker
} from '../../components'
import { IonContent } from '@ionic/react'
import { getDateNowString } from './../../utils/commons'

// constants
const TITLE_COLOR = 'var(--color-11)'

// reducer
const reducer = (state, action) => {
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

// main
const NyuuryokuGamen1Mizobashi = () => {
  // constants
  const [state, dispatch] = useReducer(reducer, {
    // GROUP_KIROKU_YOSHIKI
    lblIdo: '',
    lblKeido: '',
    lblKyouryouID: '',

    // GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO
    lblFurigana: '',
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblShozaichiJi: '',
    lblShozaichiItari: '',
    lblKyoriHyouJi: '',
    lblKyoriHyouItari: '',
    lblKasetsuNenji0: '',
    lblHashinaga: '',
    lblFukuin: '',
    lblKeishiki: '',
    lblKanrisha: '',
    lblKyouryouCode: '',
    lblKasetsuNenji1: '',

    // GROUP_MUKURO_TAI_SUNPO_OYOBI_ZENKEI_SHASHIN
    lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin: '',
    lblHashinagaMukurotaiSunpouOyobiZenkeiShashin: '',
    lblDouroFukuin: '',
    lblKyouryouKeishiki: '',

    //===============================================
    selectedDate0: undefined,
    selectedDate1: undefined,
    showDatePickerPopup: false,
    indexDatePicker: -1,
    datePickerValue: undefined
  })

  // handles
  const handleShowDatePickerPopup = index => {
    dispatch({ type: 'SET_INDEX_DATE_PICKER', payload: index })
    dispatch({ type: 'SHOW_DATE_PICKER_POPUP' })
  }
  const handleHideDatePickerPopup = () => {
    dispatch({ type: 'SET_INDEX_DATE_PICKER', payload: -1 })
    dispatch({ type: 'HIDE_DATE_PICKER_POPUP' })
  }
  const handleSetSelectedDate = date => {
    dispatch({
      type: `SET_SELECTED_DATE_${state.indexDatePicker}`,
      payload: date
    })
  }
  const handleResetSelectedDate = (e, index) => {
    e.stopPropagation()

    dispatch({
      type: `SET_SELECTED_DATE_${index}`,
      payload: getDateNowString()
    })
  }

  // effects
  useEffect(() => {
    dispatch({
      type: 'SET_GROUP_KIROKU_YOSHIKI',
      payload: {
        lblIdo: String.buzai_tani_no_shindan,
        lblKeido: String.buzai_tani_no_shindan,
        lblKyouryouID: String.buzai_tani_no_shindan
      }
    })
    dispatch({
      type: 'SET_GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO',
      payload: {
        lblFurigana: String.buzai_tani_no_shindan,
        lblKyouryoumei: String.buzai_tani_no_shindan,
        lblRosenmei: String.buzai_tani_no_shindan,
        lblShozaichiJi: String.buzai_tani_no_shindan,
        lblShozaichiItari: String.buzai_tani_no_shindan,
        lblKyoriHyouJi: String.buzai_tani_no_shindan,
        lblKyoriHyouItari: String.buzai_tani_no_shindan,
        lblKasetsuNenji0: String.buzai_tani_no_shindan,
        lblHashinaga: String.buzai_tani_no_shindan,
        lblFukuin: String.buzai_tani_no_shindan,
        lblKeishiki: String.buzai_tani_no_shindan,
        lblKanrisha: String.buzai_tani_no_shindan,
        lblKyouryouCode: String.buzai_tani_no_shindan,
        lblKasetsuNenji1: String.buzai_tani_no_shindan
      }
    })
    dispatch({
      type: 'SET_GROUP_MUKURO_TAI_SUNPO_OYOBI_ZENKEI_SHASHIN',
      payload: {
        lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin: 2015,
        lblHashinagaMukurotaiSunpouOyobiZenkeiShashin: 8.5,
        lblDouroFukuin: 26.84,
        lblKyouryouKeishiki: String.buzai_tani_kenzensei_shindan
      }
    })

    dispatch({ type: 'SET_SELECTED_DATE_0', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_1', payload: DummyData.Commons.date })
  }, [])

  useEffect(() => {
    state.indexDatePicker === -1 &&
      dispatch({ type: 'RESET_DATE_PICKER_VALUE' })

    state.indexDatePicker !== -1 &&
      dispatch({
        type: `SET_SELECTED_DATE_${state.indexDatePicker}_TO_DATE_PICKER_VALUE`
      })
  }, [state.indexDatePicker, state.selectedDate0, state.selectedDate1])

  // render
  return (
    <>
      <PopupDatePicker
        hidden={!state.showDatePickerPopup}
        initialDate={state.datePickerValue}
        onClickBackground={handleHideDatePickerPopup}
        onChangeDate={date => handleSetSelectedDate(date)}
      />

      <Styled.Container style={{ padding: '0 var(--padding-1)' }}>
        <IonContent scrollY={true}>
          <Styled.Spacing1 />

          <Styled.ContentCol>
            <Text style={{ color: 'var(--color-11)', alignSelf: 'flex-end' }}>
              {String.kiroku_yoshiki + ' (' + String.sono_konkai_tenken + '1)'}
            </Text>
            <Styled.Table
              style={{ width: 'fit-content', alignSelf: 'flex-end' }}
            >
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.qidian_ce}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>{String.ido}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblIdo}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kyouryou_id}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column rowSpan={2}>
                    <Text>{state.lblKyouryouID}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.keido}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKeido}</Text>
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={6}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.kyouryoumei +
                        '・' +
                        String.shozaichi +
                        '・' +
                        String.kanrisha_nado}
                    </Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2} rowSpan={2}>
                    <Text>
                      {String.furigana}
                      <br />
                      {String.kyouryoumei}
                    </Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblFurigana}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle rowSpan={2} colSpan={2}>
                    <Text>{String.rosenmei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column rowSpan={2}>
                    <Text>{state.lblRosenmei}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column>
                    <Text>{state.lblKyouryoumei}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.shozaichi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.ji}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblShozaichiJi}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kyori_hyou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.ji}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKyoriHyouJi}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.itari}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblShozaichiItari}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.itari}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKyoriHyouItari}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.kasetsu_nenji}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKasetsuNenji0}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.hashinaga}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblHashinaga}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.fukuin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblFukuin}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.keishiki}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKeishiki}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2} rowSpan={3}>
                    <Text>{String.kanrisha}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column rowSpan={3}>
                    <Text>{state.lblKanrisha}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.kyouryou_code}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKyouryouCode}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.chousho_koushin_nengappi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column onClick={() => handleShowDatePickerPopup(0)}>
                    <Styled.DateContainer>
                      <Text>{state.selectedDate0}</Text>
                      <ButtonType1
                        light={true}
                        size='small'
                        title={String.today}
                        onClick={e => handleResetSelectedDate(e, 0)}
                      />
                    </Styled.DateContainer>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.teiki_tenken_jisshi_nengappi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column onClick={() => handleShowDatePickerPopup(1)}>
                    <Styled.DateContainer>
                      <Text>{state.selectedDate1}</Text>
                      <ButtonType1
                        light={true}
                        size='small'
                        title={String.today}
                        onClick={e => handleResetSelectedDate(e, 1)}
                      />
                    </Styled.DateContainer>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.kasetsu_nenji}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKasetsuNenji1}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.teiki_tenkensha}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputText style={{ width: '100%' }} disableBorder />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={5}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.buzai_tani_no_shindan} ({String.M0001})
                    </Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={5}>
                    <Text>{String.teiki_tenkenji_ni_kiroku}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.buzaimei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>
                      {String.hante_kubun}
                      <br />
                      (I~IV)
                    </Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>
                      {String.henjou_shurui}
                      <br />
                      (II{String.ijo_no_baai_biko_biko_ni_kisai})
                    </Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>
                      {String.bikou} ({String.shashin_bangou},{' '}
                      {String.ichi_to_ga_wakaru_yo_ni_kisai})
                    </Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={3}>
                    <Text>
                      {String.mizohashi}({String.bokkusukarubado})
                      {String.hontai}
                    </Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text style={{ width: 'max-content' }}>
                      {String.ding_ban}
                    </Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text style={{ width: 'max-content' }}>{String.cebi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text style={{ width: 'max-content' }}>{String.diban}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.yibi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.tsugite}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.sonohoka}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={2}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.mizohashi_goto_no_kenzen_sei_no_shindan +
                        ' (' +
                        String.hante_kubun +
                        'I~IV)'}
                    </Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.teiki_tenkenji_ni_kiroku}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>({String.hante_kubun})</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>({String.shokentou})</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={5}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.mukuro_tai_sunpo_oyobi_zenkei_shashin}
                    </Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.kasetsu_nenji}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>{String.hashinaga}(m)</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle>
                    <Text>{String.douro_fukuin}(m)</Text>
                  </Styled.ColumnTitle>

                  <Styled.Column rowSpan={5} style={{ textAlign: 'center' }}>
                    <Styled.Image src={Images.no_image} width='100%' />
                  </Styled.Column>

                  <Styled.Column rowSpan={4}>
                    <Styled.ContentCol>
                      <ButtonType4 title={String.fairu_sentaku} />
                      <ButtonType4 title={String.kamera_kidou} />
                    </Styled.ContentCol>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column>
                    <Text>
                      {state.lblKasetsuNenjiMukurotaiSunpouOyobiZenkeiShashin}
                    </Text>
                  </Styled.Column>
                  <Styled.Column>
                    <Text>
                      {state.lblHashinagaMukurotaiSunpouOyobiZenkeiShashin}
                    </Text>
                  </Styled.Column>
                  <Styled.Column>
                    <Text>{state.lblDouroFukuin}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={3}>
                    <Text>{String.kyouryou_keishiki}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column colSpan={3}>
                    <Text>{state.lblKyouryouKeishiki}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column colSpan={3}>
                    <InputSelection />
                  </Styled.Column>
                  <Styled.Column>
                    <InputSelection />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column
                    style={{ border: 'none', textAlign: 'center' }}
                    colSpan={5}
                  >
                    <ButtonType1
                      title={String.koushin}
                      style={{ width: 'var(--button-width)' }}
                    />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>
          </Styled.ContentCol>

          <Styled.Spacing1 />
        </IonContent>
      </Styled.Container>
    </>
  )
}

export default NyuuryokuGamen1Mizobashi

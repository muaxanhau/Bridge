import React, { useEffect, useReducer } from 'react'
import { String, Images, DummyData } from '../../constants'
import { TableContainer } from './elements'
import {
  Styled,
  Text,
  PopupDatePicker,
  ButtonType1,
  ButtonType4,
  InputText,
  InputSelection
} from './../../components'
import { IonContent } from '@ionic/react'
import { usePhotoGallery } from './../../utils/hooks'
import {getDateNowString} from './../../utils/commons'

// constants
const TITLE_COLOR = 'var(--color-11)'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO':
      return {
        ...state,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblIdo: action.payload.lblIdo || state.lblIdo,
        lblKeido: action.payload.lblKeido || state.lblKeido,
        lblKyouryouID: action.payload.lblKyouryouID || state.lblKyouryouID,
        lblShozaichi: action.payload.lblShozaichi || state.lblShozaichi,
        lblKanrishamei: action.payload.lblKanrishamei || state.lblKanrishamei
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
    case 'SET_SELECTED_DATE_6':
      return {
        ...state,
        selectedDate6: action.payload
      }
    case 'SET_SELECTED_DATE_6_TO_DATE_PICKER_VALUE':
      return {
        ...state,
        datePickerValue: state.selectedDate6
      }
    default:
      return state
  }
}

// main
const NyuuryokuGamen1 = () => {
  // constants
  const [state, dispatch] = useReducer(reducer, {
    // GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblIdo: '',
    lblKeido: '',
    lblKyouryouID: '',
    lblShozaichi: '',
    lblKanrishamei: '',

    // ==============================================
    selectedDate0: undefined,
    selectedDate1: undefined,
    selectedDate2: undefined,
    selectedDate3: undefined,
    selectedDate4: undefined,
    selectedDate5: undefined,
    selectedDate6: undefined,

    showDatePickerPopup: false,
    indexDatePicker: -1,
    datePickerValue: undefined
  })
  const { photos, takePhoto, getGallery } = usePhotoGallery()

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
      type: 'SET_GROUP_KYOURYOUMEI_SHOZAICHI_KANRISHA_NADO',
      payload: {
        lblKyouryoumei: String.buzai_bangou,
        lblRosenmei: String.buzai_bangou,
        lblIdo: String.buzai_bangou,
        lblKeido: String.buzai_bangou,
        lblKyouryouID: String.buzai_bangou,
        lblShozaichi: String.buzai_bangou,
        lblKanrishamei: String.buzai_bangou
      }
    })

    dispatch({ type: 'SET_SELECTED_DATE_0', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_1', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_2', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_3', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_4', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_5', payload: DummyData.Commons.date })
    dispatch({ type: 'SET_SELECTED_DATE_6', payload: DummyData.Commons.date })
  }, [])

  useEffect(() => {
    state.indexDatePicker === -1 &&
      dispatch({ type: 'RESET_DATE_PICKER_VALUE' })

    state.indexDatePicker !== -1 &&
      dispatch({
        type: `SET_SELECTED_DATE_${state.indexDatePicker}_TO_DATE_PICKER_VALUE`
      })
  }, [
    state.indexDatePicker,
    state.selectedDate0,
    state.selectedDate1,
    state.selectedDate2,
    state.selectedDate3,
    state.selectedDate4,
    state.selectedDate5,
    state.selectedDate6
  ])

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
            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={4}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.kyouryoumei +
                        '・' +
                        String.shozaichi +
                        '・' +
                        String.kanrishamei +
                        String.etc}
                    </Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.kyouryou_id}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKyouryouID}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.tenken_jisshi_nengappi}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.kyouryoumei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKyouryoumei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.ido}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblIdo}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.shozaichi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblShozaichi}</Text>
                  </Styled.Column>
                  <Styled.Column
                    rowSpan={2}
                    onClick={() => handleShowDatePickerPopup(0)}
                  >
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
                  <Styled.ColumnTitle>
                    <Text>{String.rosenmei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblRosenmei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.keido}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKeido}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.kanrishamei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKanrishamei}</Text>
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <TableContainer>
              <Styled.Table>
                <Styled.TBody>
                  <Styled.Row>
                    <Styled.Column colSpan={5}>
                      <Text style={{ color: TITLE_COLOR }}>
                        {String.buzai_tani_no_shindan +
                          ' (' +
                          String.M0001 +
                          ')'}
                      </Text>
                    </Styled.Column>
                    <Styled.ColumnTitle>
                      <Text>{String.teiki_tenkensha}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column colSpan={2}>
                      <InputText disableBorder style={{ width: '100%' }} />
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle colSpan={5}>
                      <Text>{String.teiki_tenkenji_ni_kiroku}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle colSpan={3} />
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle colSpan={2}>
                      <Text>{String.buzaimei}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.hante_kubun}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.henjou_shurui}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.bikou}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.oukyuu_sochigo_no_hantei_kubun}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.oukyuu_sochi_naiyou}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>
                        {String.oukyuu_sochi_oyobi_hantei_jisshi_nengappi}
                      </Text>
                    </Styled.ColumnTitle>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle rowSpan={3}>
                      <Text>{String.jobu_kozo}</Text>
                    </Styled.ColumnTitle>
                    <Styled.ColumnTitle>
                      <Text>{String.zhu_heng}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
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
                    <Styled.ColumnTitle>
                      <Text>{String.heng_heng}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(2)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate2}</Text>
                        <ButtonType1
                          light={true}
                          size='small'
                          title={String.today}
                          onClick={e => handleResetSelectedDate(e, 2)}
                        />
                      </Styled.DateContainer>
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle>
                      <Text>{String.chuang_ban}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(3)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate3}</Text>
                        <ButtonType1
                          light={true}
                          size='small'
                          title={String.today}
                          onClick={e => handleResetSelectedDate(e, 3)}
                        />
                      </Styled.DateContainer>
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle colSpan={2}>
                      <Text>{String.kabu_kozo}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(4)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate4}</Text>
                        <ButtonType1
                          light={true}
                          size='small'
                          title={String.today}
                          onClick={e => handleResetSelectedDate(e, 4)}
                        />
                      </Styled.DateContainer>
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.ColumnTitle colSpan={2}>
                      <Text>{String.zhicheng_bu}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(5)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate5}</Text>
                        <ButtonType1
                          light={true}
                          size='small'
                          title={String.today}
                          onClick={e => handleResetSelectedDate(e, 5)}
                        />
                      </Styled.DateContainer>
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
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(6)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate6}</Text>
                        <ButtonType1
                          light={true}
                          size='small'
                          title={String.today}
                          onClick={e => handleResetSelectedDate(e, 6)}
                        />
                      </Styled.DateContainer>
                    </Styled.Column>
                  </Styled.Row>
                </Styled.TBody>
              </Styled.Table>
            </TableContainer>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column colSpan={5}>
                    <Text style={{ color: TITLE_COLOR }}>
                      {String.kyoryo_goto_no_kenzen_sei_no_shindan +
                        ' (' +
                        String.hante_kubun +
                        'I~IV)'}
                    </Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={5}>
                    <Text>{String.teiki_tenkenji_ni_kiroku}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={3}>
                    <Text>{String.hante_kubun}</Text>
                  </Styled.ColumnTitle>

                  <Styled.ColumnTitle colSpan={2}>
                    <Text>{String.shokentou}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column colSpan={3}>
                    <InputSelection />
                  </Styled.Column>

                  <Styled.Column colSpan={2}>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.kasetsu_nenji}</Text>
                  </Styled.ColumnTitle>

                  <Styled.ColumnTitle>
                    <Text>{String.hashinaga + '(m)'}</Text>
                  </Styled.ColumnTitle>

                  <Styled.ColumnTitle>
                    <Text>{String.douro_fukuin + '(m)'}</Text>
                  </Styled.ColumnTitle>

                  <Styled.Column
                    rowSpan={5}
                    width='35%'
                    style={{ textAlign: 'center' }}
                  >
                    <Styled.Image
                      src={
                        photos.length
                          ? photos[photos.length - 1].imageUrl
                          : Images.no_image
                      }
                      width='100%'
                    />
                  </Styled.Column>
                  <Styled.Column rowSpan={4}>
                    <Styled.ContentCol>
                      <ButtonType4
                        title={String.fairu_sentaku}
                        onClick={getGallery}
                      />
                      <ButtonType4
                        title={String.kamera_kidou}
                        onClick={takePhoto}
                      />
                    </Styled.ContentCol>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column>
                    <Text>2000</Text>
                  </Styled.Column>

                  <Styled.Column>
                    <Text>625.8</Text>
                  </Styled.Column>

                  <Styled.Column>
                    <Text>10.8</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={3}>
                    <Text>{String.kyouryou_keishiki}</Text>
                  </Styled.ColumnTitle>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column colSpan={3}>
                    <Text>asdsadsadsadsadsad</Text>
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
                    colSpan={5}
                    style={{
                      border: 'none',
                      textAlign: 'center'
                    }}
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

export default NyuuryokuGamen1

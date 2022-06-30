import React, { useEffect, useReducer } from 'react'
import { String, Images, DummyData, SQLite } from '../../constants'
import { TableContainer } from './elements'
import {
  Styled,
  Text,
  PopupDatePicker,
  ButtonType1,
  ButtonType4,
  InputText,
  InputSelection,
  PopupPhoto
} from './../../components'
import { IonContent } from '@ionic/react'
import { useMutation, usePhotoGallery, useQuery } from './../../utils/hooks'
import {
  convertDate,
  getDateNowString,
  getBase64FromImage
} from './../../utils/commons'
import { useForm } from 'react-hook-form'
import { useIonAlert } from '@ionic/react'
import { reducer } from './reducer'

// constants
const TITLE_COLOR = 'var(--color-11)'
const MAX_WIDTH_COL = '10ch'

// main
const NyuuryokuGamen1 = ({ NO_GYOUMU, BRIDGE_ID }) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    // master data
    dataListShindan: [],

    // group 1
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblIdo: '',
    lblKeido: '',
    lblKyouryouID: '',
    lblShozaichi: '',
    lblKanrishamei: '',

    // group 3
    lblKasetsuNenji: '',
    lblHashinaga: '',
    lblDouroFukuin: '',
    lblKyouryouKeishiki: '',
    image: null,

    // ==============================================
    selectedDate0: null,
    selectedDate1: null,
    selectedDate2: null,
    selectedDate3: null,
    selectedDate4: null,
    selectedDate5: null,
    selectedDate99: null,

    showDatePickerPopup: false,
    indexDatePicker: -1,
    datePickerValue: undefined,
    showImagePopup: false
  })

  // constants
  const [present] = useIonAlert()
  const { photos, takePhoto, getGallery } = usePhotoGallery()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  // query - mutation
  const queryShindan = useQuery({
    queryString:
      SQLite.QueryString.MShindan.select.CodeShindan_NameShindan.pure,
    onSuccess: data =>
      dispatch({
        type: 'SET_DATA_LIST_SHINDAN',
        payload: data.map(item => [item.CODE_SHINDAN, item.NAME_SHINDAN])
      })
  })
  const queryGroup1 = useQuery({
    queryString:
      SQLite.QueryString.select
        .NameShisetsuTenken_NameRosen_IdoStartTenken_KeidoStartTenken_BridgeIDTenken_Shozaichi1Ji_NameSoshiki_NengappiTenken
        .by.NoGyoumu_BridgeID.with.FlgTabletEqual1,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      dispatch({
        type: 'SET_GROUP_1',
        payload: {
          lblKyouryoumei: data[0]?.NAME_SHISETSU_TENKEN,
          lblRosenmei: data[0]?.NAME_ROSEN,
          lblIdo: data[0]?.IDO_START_TENKEN,
          lblKeido: data[0]?.KEIDO_START_TENKEN,
          lblKyouryouID: data[0]?.BRIDGE_ID_TENKEN,
          lblShozaichi: data[0]?.SHOZAICHI1_JI,
          lblKanrishamei: data[0]?.NAME_SOSHIKI,
          date: convertDate(data[0]?.NENGAPPI_TENKEN)
        }
      })
    }
  })
  const queryGroup2_1 = useQuery({
    queryString:
      SQLite.QueryString.TenkenRireki.select.NameTenkensha_ShindanTenken_Shoken
        .by.NoGyoumu_BridgeID_FlgTablet.pure,
    params: [NO_GYOUMU, BRIDGE_ID, 1],
    onSuccess: data => {
      setValue('TeikiTenkensha', data[0]?.NAME_TENKENSHA)
      setValue('ShindanTenken', data[0]?.SHINDAN_TENKEN)
      setValue('Shoken', data[0]?.SHOKEN)
    }
  })
  const queryGroup2_2 = useQuery({
    queryString:
      SQLite.QueryString.BuzaiHyouka.select
        .NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihentei
        .by.NoGyoumu_BridgeID_FlgTablet.pure,
    params: [NO_GYOUMU, BRIDGE_ID, 1],
    onSuccess: data => {
      data.forEach(item => {
        setValue(`HanteiKubun${item.NO_BUZAI}`, item.SHINDAN_TENKEN)
        setValue(`HenjouShurui${item.NO_BUZAI}`, item.CODE_HENJOU_TENKEN)
        setValue(`Bikou${item.NO_BUZAI}`, item.BIKOU_TENKEN)
        setValue(
          `OukyuuSochigoNoHanteiKubun${item.NO_BUZAI}`,
          item.SHINDAN_SOCHIGO
        )
        setValue(`OukyuuSochiNaiyou${item.NO_BUZAI}`, item.CODE_HENJOU_SOCHIGO)
        dispatch({
          type: `SET_SELECTED_DATE_${item.NO_BUZAI}`,
          payload: convertDate(item.NENGAPPI_SAIHANTEI)
        })
      })
    }
  })
  const queryGroup3 = useQuery({
    queryString:
      SQLite.QueryString.Bridge.select
        .NenKasetsu_BridgeLength_WidthZen_BridgeKeisiki.by.NoGyoumu_BridgeID
        .pure,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data =>
      dispatch({
        type: 'SET_GROUP_3',
        payload: {
          lblKasetsuNenji: data[0]?.NEN_KASETSU,
          lblHashinaga: data[0]?.BRIDGE_LENGTH,
          lblDouroFukuin: data[0]?.WIDTH_ZEN,
          lblKyouryouKeishiki: data[0]?.BRIDGE_KEISHIKI
        }
      })
  })
  const queryGazou = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazou.select
        .FullPath_HoushinChousa_HoushinSochi.by
        .NoGyoumu_BridgeID_GazouID_FlgTablet.pure,
    params: [NO_GYOUMU, BRIDGE_ID, '0', '1'],
    onSuccess: data => {
      data[0]?.FULL_PATH &&
        dispatch({
          type: 'SET_GROUP_3',
          payload: {
            image: String.base64RootImage + data[0]?.FULL_PATH
          }
        })

      setValue('HoushinChousa', data[0].HOUSHIN_CHOUSA)
      setValue('HoushinSochi', data[0].HOUSHIN_SOCHI)
    }
  })

  const mutationUpdateTenkenRireki = useMutation({
    queryString:
      SQLite.QueryString.TenkenRireki.update
        .NengappiTenken_NameTenkensha_ShindanTenken_Shoken.by
        .NoGyoumu_BridgeID_FlgTablet.pure
  })
  const mutationUpdateBuzaiHyouka1 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateBuzaiHyouka2 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateBuzaiHyouka3 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateBuzaiHyouka4 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateBuzaiHyouka5 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateBuzaiHyouka99 = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert_update
        .ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei
        .by.NoGyoumu_BridgeID_FlgTablet_NoBuzai.pure
  })
  const mutationUpdateGazou = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazou.update
        .FullPath_HoushinChousa_HoushinSochi.by
        .NoGyoumu_BridgeID_FlgTablet_GazouID.pure
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
  const handleShowImagePopup = () => dispatch({ type: 'SHOW_IMAGE_POPUP' })
  const handleHideImagePopup = () => dispatch({ type: 'HIDE_IMAGE_POPUP' })
  const onSubmit = data => {
    if (data.TeikiTenkensha.length > 50) {
      present({
        message:
          String.teiki_tenkensha + String.E0003.E1 + '50' + String.E0003.E2,
        buttons: ['Ok']
      })

      return
    }

    if (
      [
        data.HenjouShurui1?.length || 0,
        data.HenjouShurui2?.length || 0,
        data.HenjouShurui3?.length || 0,
        data.HenjouShurui4?.length || 0,
        data.HenjouShurui5?.length || 0,
        data.HenjouShurui99?.length || 0
      ].some(item => item > 255)
    ) {
      present({
        message:
          String.henjou_shurui + String.E0003.E1 + '255' + String.E0003.E2,
        buttons: ['Ok']
      })

      return
    }

    if (
      [
        data.Bikou1?.length || 0,
        data.Bikou2?.length || 0,
        data.Bikou3?.length || 0,
        data.Bikou4?.length || 0,
        data.Bikou5?.length || 0,
        data.Bikou99?.length || 0
      ].some(item => item > 255)
    ) {
      present({
        message: String.bikou + String.E0003.E1 + '255' + String.E0003.E2,
        buttons: ['Ok']
      })

      return
    }

    if (
      [
        data.OukyuuSochiNaiyou1?.length || 0,
        data.OukyuuSochiNaiyou2?.length || 0,
        data.OukyuuSochiNaiyou3?.length || 0,
        data.OukyuuSochiNaiyou4?.length || 0,
        data.OukyuuSochiNaiyou5?.length || 0,
        data.OukyuuSochiNaiyou99?.length || 0
      ].some(item => item > 255)
    ) {
      present({
        message:
          String.oukyuu_sochi_naiyou +
          String.E0003.E1 +
          '255' +
          String.E0003.E2,
        buttons: ['Ok']
      })

      return
    }

    mutationUpdateTenkenRireki.execute([
      state.selectedDate0.replaceAll('-', ''),
      data.TeikiTenkensha,
      data.ShindanTenken,
      data.Shoken,
      NO_GYOUMU,
      BRIDGE_ID,
      1
    ])

    mutationUpdateBuzaiHyouka1.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      1,
      data.HanteiKubun1,
      data.HenjouShurui1,
      data.Bikou1,
      data.OukyuuSochigoNoHanteiKubun1,
      data.OukyuuSochiNaiyou1,
      state.selectedDate1?.replaceAll('-', ''),
      data.HanteiKubun1,
      data.HenjouShurui1,
      data.Bikou1,
      data.OukyuuSochigoNoHanteiKubun1,
      data.OukyuuSochiNaiyou1,
      state.selectedDate1?.replaceAll('-', '')
    ])
    mutationUpdateBuzaiHyouka2.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      2,
      data.HanteiKubun2,
      data.HenjouShurui2,
      data.Bikou2,
      data.OukyuuSochigoNoHanteiKubun2,
      data.OukyuuSochiNaiyou2,
      state.selectedDate2?.replaceAll('-', ''),
      data.HanteiKubun2,
      data.HenjouShurui2,
      data.Bikou2,
      data.OukyuuSochigoNoHanteiKubun2,
      data.OukyuuSochiNaiyou2,
      state.selectedDate2?.replaceAll('-', '')
    ])
    mutationUpdateBuzaiHyouka3.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      3,
      data.HanteiKubun3,
      data.HenjouShurui3,
      data.Bikou3,
      data.OukyuuSochigoNoHanteiKubun3,
      data.OukyuuSochiNaiyou3,
      state.selectedDate3?.replaceAll('-', ''),
      data.HanteiKubun3,
      data.HenjouShurui3,
      data.Bikou3,
      data.OukyuuSochigoNoHanteiKubun3,
      data.OukyuuSochiNaiyou3,
      state.selectedDate3?.replaceAll('-', '')
    ])
    mutationUpdateBuzaiHyouka4.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      4,
      data.HanteiKubun4,
      data.HenjouShurui4,
      data.Bikou4,
      data.OukyuuSochigoNoHanteiKubun4,
      data.OukyuuSochiNaiyou4,
      state.selectedDate4?.replaceAll('-', ''),
      data.HanteiKubun4,
      data.HenjouShurui4,
      data.Bikou4,
      data.OukyuuSochigoNoHanteiKubun4,
      data.OukyuuSochiNaiyou4,
      state.selectedDate4?.replaceAll('-', '')
    ])
    mutationUpdateBuzaiHyouka5.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      5,
      data.HanteiKubun5,
      data.HenjouShurui5,
      data.Bikou5,
      data.OukyuuSochigoNoHanteiKubun5,
      data.OukyuuSochiNaiyou5,
      state.selectedDate5?.replaceAll('-', ''),
      data.HanteiKubun5,
      data.HenjouShurui5,
      data.Bikou5,
      data.OukyuuSochigoNoHanteiKubun5,
      data.OukyuuSochiNaiyou5,
      state.selectedDate5?.replaceAll('-', '')
    ])
    mutationUpdateBuzaiHyouka99.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      99,
      data.HanteiKubun99,
      data.HenjouShurui99,
      data.Bikou99,
      data.OukyuuSochigoNoHanteiKubun99,
      data.OukyuuSochiNaiyou99,
      state.selectedDate99?.replaceAll('-', ''),
      data.HanteiKubun99,
      data.HenjouShurui99,
      data.Bikou99,
      data.OukyuuSochigoNoHanteiKubun99,
      data.OukyuuSochiNaiyou99,
      state.selectedDate99?.replaceAll('-', '')
    ])

    mutationUpdateGazou.execute([
      state.image?.replace(String.base64RootImage, ''),
      data.HoushinChousa,
      data.HoushinSochi,
      NO_GYOUMU,
      BRIDGE_ID,
      1,
      0
    ])
  }

  // effects
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
    state.selectedDate99
  ])
  useEffect(() => {
    photos.length &&
      getBase64FromImage(photos[photos.length - 1].imageUrl, base64img =>
        dispatch({
          type: 'SET_GROUP_3',
          payload: {
            image: String.base64RootImage + base64img
          }
        })
      )
  }, [photos])

  // render
  return (
    <>
      <PopupDatePicker
        hidden={!state.showDatePickerPopup}
        initialDate={state.datePickerValue}
        onClickBackground={handleHideDatePickerPopup}
        onChangeDate={date => handleSetSelectedDate(date)}
      />

      <PopupPhoto
        hidden={!state.showImagePopup}
        onClickBackground={handleHideImagePopup}
        image={state.image}
      />

      <Styled.ContainerForm
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: '0 var(--padding-1)' }}
      >
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
                  <Styled.Column style={{ maxWidth: MAX_WIDTH_COL }}>
                    <Text>{state.lblIdo}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.shozaichi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column style={{ maxWidth: MAX_WIDTH_COL }}>
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
                  <Styled.Column style={{ maxWidth: MAX_WIDTH_COL }}>
                    <Text>{state.lblKeido}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.kanrishamei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column style={{ maxWidth: MAX_WIDTH_COL }}>
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
                      <InputText
                        {...register('TeikiTenkensha')}
                        disableBorder
                        style={{ width: '100%' }}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun1')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('HenjouShurui1')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou1')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun1')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou1')}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun2')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('HenjouShurui2')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou2')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun2')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou2')}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun3')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('HenjouShurui3')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou3')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun3')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou3')}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun4')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('HenjouShurui4')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou4')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun4')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou4')}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun5')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('HenjouShurui5')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou5')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun5')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou5')}
                      />
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
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('HanteiKubun99')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('HenjouShurui99')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText disableBorder {...register('Bikou99')} />
                    </Styled.Column>
                    <Styled.Column>
                      <InputSelection
                        data={state.dataListShindan}
                        {...register('OukyuuSochigoNoHanteiKubun99')}
                      />
                    </Styled.Column>
                    <Styled.Column>
                      <InputText
                        disableBorder
                        {...register('OukyuuSochiNaiyou99')}
                      />
                    </Styled.Column>
                    <Styled.Column onClick={() => handleShowDatePickerPopup(6)}>
                      <Styled.DateContainer>
                        <Text>{state.selectedDate99}</Text>
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
                    <InputSelection
                      data={state.dataListShindan}
                      {...register('ShindanTenken')}
                    />
                  </Styled.Column>

                  <Styled.Column colSpan={2}>
                    <InputText
                      disableBorder
                      style={{ width: '100%' }}
                      {...register('Shoken')}
                    />
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
                      src={state.image || Images.no_image}
                      width='100%'
                      onClick={state.image && handleShowImagePopup}
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
                    <Text>{state.lblKasetsuNenji}</Text>
                  </Styled.Column>

                  <Styled.Column>
                    <Text>{state.lblHashinaga}</Text>
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
                    <InputSelection
                      data={DummyData.Houshin}
                      {...register('HoushinChousa')}
                    />
                  </Styled.Column>
                  <Styled.Column>
                    <InputSelection
                      data={DummyData.Houshin}
                      {...register('HoushinSochi')}
                    />
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
                      type='submit'
                    />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>
          </Styled.ContentCol>

          <Styled.Spacing1 />
        </IonContent>
      </Styled.ContainerForm>
    </>
  )
}

export default NyuuryokuGamen1

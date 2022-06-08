import React, { useEffect, useReducer } from 'react'
import { Container } from './elements'
import { closeCircleSharp } from 'ionicons/icons'
import { String, SQLite } from './../../constants'
import PopupLayout from '../PopupLayout/PopupLayout'
import Styled from './../Styled/Styled'
import InputSelection from './../InputSelection/InputSelection'
import Text from './../Text/Text'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import ButtonType1 from './../ButtonType1/ButtonType1'
import InputText from './../InputText/InputText'
import InputTextArea from './../InputTextArea/InputTextArea'
import { useQuery, useMutation } from '../../utils/hooks'
import { useIonAlert } from '@ionic/react'
import { useForm } from 'react-hook-form'
import { schemaPopupSonshouShashin } from './../../utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import PopupTakePhoto from '../PopupTakePhoto/PopupTakePhoto'
import PopupTenkenYouryouHyouji from '../PopupTenkenYouryouHyouji/PopupTenkenYouryouHyouji'
import { getBase64FromImage } from './../../utils/commons'

// constants

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEFAULT':
      return {
        ...state,
        cbbHanteKubun: action.payload.cbbHanteKubun || state.cbbHanteKubun,
        cbbBuzaimei: action.payload.cbbBuzaimei || state.cbbBuzaimei,
        cbbHenjouShurui:
          action.payload.cbbHenjouShurui || state.cbbHenjouShurui,
        txtHenjouShurui:
          action.payload.txtHenjouShurui || state.txtHenjouShurui,
        txtaBikou: action.payload.txtaBikou || state.txtaBikou
      }
    case 'SET_DATA_LIST_M_SHINDAN':
      return {
        ...state,
        dataListMShindan: Array.isArray(action.payload)
          ? action.payload
          : state.dataListMShindan
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
    case 'ENABLE_TXT_HENJOU_SHURUI':
      return {
        ...state,
        enableTxtHenjouShurui: true
      }
    case 'DISABLE_TXT_HENJOU_SHURUI':
      return {
        ...state,
        enableTxtHenjouShurui: false
      }
    case 'SHOW_TAKE_PHOTO_POPUP':
      return {
        ...state,
        showTakePhotoPopup: true
      }
    case 'HIDE_TAKE_PHOTO_POPUP':
      return {
        ...state,
        showTakePhotoPopup: false
      }
    case 'SHOW_TENKEN_YOURYOU_HYOUJI_POPUP':
      return {
        ...state,
        showTenkenYouryouHyoujiPopup: true
      }
    case 'HIDE_TENKEN_YOURYOU_HYOUJI_POPUP':
      return {
        ...state,
        showTenkenYouryouHyoujiPopup: false
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

// main
const PopupSonshouShashin = ({
  hidden = false,
  noGyoumu,
  bridgeID,
  gazouID,
  onClickClose = () => {},
  onChangeGlobalValue = () => {}
}) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    cbbHanteKubun: undefined,
    cbbBuzaimei: undefined,
    cbbHenjouShurui: undefined,
    txtHenjouShurui: undefined,
    txtaBikou: undefined,

    //=======================================
    dataListMShindan: [],
    dataListBuzai: [],
    dataListMDamageShurui: [],

    //=======================================
    enableTxtHenjouShurui: false,
    showTakePhotoPopup: false,
    showTenkenYouryouHyoujiPopup: false,
    tmpBase64Image: null
  })

  // constants
  const [present] = useIonAlert()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(schemaPopupSonshouShashin)
  })

  // query - mutation
  const queryDefault = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select
        .ShindanTenken_NameBuzai_CodeDamageShurui_DamageShurui_Bikou.by
        .NoGyoumu_BridgeID.with.FlgTabletEqual1_GazouIDNoEqual0,
    params: [noGyoumu, bridgeID],
    onSuccess: data => {
      dispatch({
        type: 'SET_DEFAULT',
        payload: {
          cbbHanteKubun: data[0].SHINDAN_TENKEN,
          cbbBuzaimei: data[0].NAME_BUZAI,
          cbbHenjouShurui: data[0].CODE_DAMAGE_SHURUI,
          txtHenjouShurui: data[0].DAMAGE_SHURUI,
          txtaBikou: data[0].BIKOU
        }
      })
    }
  })
  const queryMShindan = useQuery({
    queryString:
      SQLite.QueryString.MShindan.select.CodeShindan_NameShindan.pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_M_SHINDAN', payload: data })
    }
  })
  const queryMBuzaiZairyou = useQuery({
    queryString:
      SQLite.QueryString.MBuzaiZairyou.select.CodeBuzaiZairyou_NameBuzaiZairyou
        .pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_M_BUZAI_ZAIRYOU', payload: data })
    }
  })
  const queryMDamageShurui = useQuery({
    queryString:
      SQLite.QueryString.MDamageShurui.select.CodeDamageShurui_NameDamageShurui
        .pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_M_DAMAGE_SHURUI', payload: data })
    }
  })
  const mutationDeleteTenkenhyoGazouTemp = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.delete.by.NoGyoumu_BridgeID_GazouID
        .pure
  })
  const mutationInsertTenkenhyoGazouTemp = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.insert
        .NoGyoumu_BridgeID_ShindanTenken_NameBuzai_CodeDamageShurui_DamageShurui_Bikou
  })
  const mutationUpdateFullPath = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.update.FullPath.by
        .NoGyoumu_BridgeID_GazouID.with.FlgTabletEqual1,
    onSuccess: () => onChangeGlobalValue()
  })

  // handles
  const handleShowTenkenYouryouHyoujiPopup = () => {
    dispatch({ type: 'SHOW_TENKEN_YOURYOU_HYOUJI_POPUP' })
  }
  const handleHideTenkenYouryouHyoujiPopup = () => {
    dispatch({ type: 'HIDE_TENKEN_YOURYOU_HYOUJI_POPUP' })
  }
  const handleOnChangeTxtHenjouShurui = e => {
    dispatch({
      type: `${
        // tmp ! => none
        !state.dataListMDamageShurui
          .filter(
            item =>
              parseInt(item.CODE_DAMAGE_SHURUI) === parseInt(e.target.value)
          )[0]
          ?.NAME_DAMAGE_SHURUI.includes(String.sonohoka)
          ? 'ENABLE'
          : 'DISABLE'
      }_TXT_HENJOU_SHURUI`
    })
  }
  const handleOnChangePhoto = photo => {
    const { imageUrl } = photo

    getBase64FromImage(imageUrl, base64image => {
      dispatch({ type: 'SET_TMP_BASE_64_IMAGE', payload: base64image })
    })
  }
  const handleSakujo = () => {
    present({
      // header: 'Alert',
      message: String.Q0002,
      buttons: [
        String.ie,
        {
          text: String.hai,
          handler: () => {
            mutationDeleteTenkenhyoGazouTemp
              .execute([noGyoumu, bridgeID, gazouID])
              .then(() => {
                onChangeGlobalValue()
              })

            onClickClose()
          }
        }
      ]
    })
  }
  const handleTouroku = () => {
    mutationUpdateFullPath.execute([
      state.tmpBase64Image,
      noGyoumu,
      bridgeID,
      gazouID
    ])
    onClickClose()
  }
  const onSubmit = data => {
    console.log(data)
  }

  // handles
  const handleShowTakePhotoPopup = () => {
    dispatch({ type: 'SHOW_TAKE_PHOTO_POPUP' })
  }
  const handleHideTakePhotoPopup = () => {
    dispatch({ type: 'HIDE_TAKE_PHOTO_POPUP' })
  }

  // effects
  useEffect(() => {
    !hidden && queryDefault.reExecute()

    hidden && dispatch({ type: 'SET_TMP_BASE_64_IMAGE', payload: null })
  }, [hidden])
  useEffect(() => {
    console.log(errors)
  }, [errors])

  // render
  if (hidden) {
    return null
  }

  return (
    <>
      <PopupLayout enableScroll={false}>
        <Container onSubmit={handleSubmit(onSubmit)}>
          <Styled.ContentCol>
            <ButtonIcon
              icon={closeCircleSharp}
              size='40px'
              style={{ alignSelf: 'flex-end' }}
              onClick={onClickClose}
            />

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.hante_kubun}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={3}>
                    <InputSelection
                      {...register('shindan')}
                      data={state.dataListMShindan}
                      defaultValue={state.cbbHanteKubun ?? 0}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.buzaimei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={3}>
                    <InputSelection
                      {...register('buzai')}
                      data={state.dataListBuzai}
                      defaultValue={
                        state.dataListBuzai.filter(
                          item => item.NAME_BUZAI === state.cbbBuzaimei
                        )[0]?.CODE_BUZAI_ZAIRYOU
                      }
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.henjou_shurui}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <InputSelection
                      {...register('shurui')}
                      data={state.dataListMDamageShurui}
                      defaultValue={state.cbbHenjouShurui || 0}
                      onChange={handleOnChangeTxtHenjouShurui}
                    />
                  </Styled.Column>
                  <Styled.Column>
                    <InputText
                      {...register('txtShurui')}
                      disableBorder={true}
                      value={state.txtHenjouShurui}
                      disabled={!state.enableTxtHenjouShurui}
                    />
                  </Styled.Column>
                  <Styled.Column>
                    <ButtonType1
                      title={String.tenken_youryou_hyouji}
                      onClick={handleShowTenkenYouryouHyoujiPopup}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.bikou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={3}>
                    <InputTextArea
                      {...register('bikou')}
                      rows={5}
                      disableBorder
                      style={{ width: '100%' }}
                      defaultValue={state.txtaBikou}
                    />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.ContentRow style={{ justifyContent: 'flex-end' }}>
              <ButtonType1
                title={String.sakujo}
                color='orange'
                light
                onClick={handleSakujo}
              />
              <ButtonType1
                title={String.tojika}
                color='green'
                onClick={handleShowTakePhotoPopup}
              />
              <ButtonType1
                title={String.touroku}
                type='submit'
                onClick={handleTouroku}
              />
            </Styled.ContentRow>
          </Styled.ContentCol>
        </Container>
      </PopupLayout>

      <PopupTakePhoto
        hidden={!state.showTakePhotoPopup}
        onClickBackground={handleHideTakePhotoPopup}
        onChangePhoto={handleOnChangePhoto}
      />

      <PopupTenkenYouryouHyouji
        hidden={!state.showTenkenYouryouHyoujiPopup}
        onClickClose={handleHideTenkenYouryouHyoujiPopup}
      />
    </>
  )
}

export default PopupSonshouShashin

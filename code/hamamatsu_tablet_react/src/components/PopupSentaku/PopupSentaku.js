import React, { useEffect, useReducer } from 'react'
import { Container } from './elements'
import { closeCircleSharp } from 'ionicons/icons'
import { String, SQLite } from './../../constants'
import PopupLayout from '../PopupLayout/PopupLayout'
import Styled from './../Styled/Styled'
import Text from './../Text/Text'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import ButtonType1 from './../ButtonType1/ButtonType1'
import InputSelection from '../InputSelection/InputSelection'
import InputTextArea from './../InputTextArea/InputTextArea'
import InputText from '../InputText/InputText'
import { useQuery } from '../../utils/hooks'
import { useForm } from 'react-hook-form'

// constants
const TEXT_COLOR = 'var(--color-6)'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEFAULT':
      return {
        ...state,
        cbbBuzai: action.payload.cbbBuzai || state.cbbBuzai,
        cbbHenjouShurui:
          action.payload.cbbHenjouShurui || state.cbbHenjouShurui,
        cbbHanteKubun: action.payload.cbbHanteKubun || state.cbbHanteKubun,
        txtaShoken: action.payload.txtaShoken || state.txtaShoken
      }
    case 'SET_DATA_LIST_M_BUZAI_ZAIRYOU':
      return {
        ...state,
        dataListMBuzaiZairyou: Array.isArray(action.payload)
          ? action.payload
          : state.dataListMBuzaiZairyou
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
    default:
      return state
  }
}

// main
const PopupSentaku = ({
  hidden = false,
  onClickClose = () => {},
  onClickNyuuryoku = (txtaShokentou = '') => {}
}) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    cbbBuzai: undefined,
    cbbHenjouShurui: undefined,
    cbbHanteKubun: undefined,
    txtaShoken: undefined,

    //=======================================
    dataListMBuzaiZairyou: [],
    dataListMDamageShurui: [],
    dataListMShindan: []
  })

  // constants
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // query - mutation
  const queryDefault = useQuery({
    queryString:
      SQLite.QueryString.MTenkenShokenTemplate.select
        .CodeBuzaiZairyou_CodeDamageShurui_CodeShindan_Shoken.pure,
    onSuccess: data => {
      if (!data.length) {
        return
      }

      // dispatch({
      //   type: 'SET_DEFAULT',
      //   payload: {
      //     cbbBuzai: data[0].CODE_BUZAI_ZAIRYOU,
      //     cbbHenjouShurui: data[0].CODE_DAMAGE_SHURUI,
      //     cbbHanteKubun: data[0].CODE_SHINDAN,
      //     txtaShoken: data[0].SHOKEN
      //   }
      // })
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
  const queryMShindan = useQuery({
    queryString:
      SQLite.QueryString.MShindan.select.CodeShindan_NameShindan.pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_M_SHINDAN', payload: data })
    }
  })

  // handles
  const onSubmit = data => {
    const { shindan, shoken } = data

    onClickNyuuryoku(
      shoken +
        state.dataListMShindan.filter(
          item => item.CODE_SHINDAN === parseInt(shindan)
        )[0]?.NAME_SHINDAN
    )
    onClickClose()
  }

  // effects
  useEffect(() => {
    !hidden && queryDefault.reExecute()
  }, [hidden])

  // render
  if (hidden) {
    return null
  }

  return (
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
                  <Text style={{ color: TEXT_COLOR }}>{String.buzai}</Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <InputSelection
                    data={state.dataListMBuzaiZairyou}
                    defaultValue={state.cbbBuzai}
                  />
                </Styled.Column>
                <Styled.ColumnTitle>
                  <Text style={{ color: TEXT_COLOR }}>
                    {String.hante_kubun}
                  </Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <InputSelection
                    {...register('shindan')}
                    data={state.dataListMShindan}
                    defaultValue={state.cbbHanteKubun}
                  />
                </Styled.Column>
              </Styled.Row>
              <Styled.Row>
                <Styled.ColumnTitle>
                  <Text style={{ color: TEXT_COLOR }}>
                    {String.henjou_shurui}
                  </Text>
                </Styled.ColumnTitle>
                <Styled.Column style={{ border: 'none' }}>
                  <InputSelection
                    data={state.dataListMDamageShurui}
                    defaultValue={state.cbbHenjouShurui}
                  />
                </Styled.Column>
                <Styled.Column
                  style={{ borderLeft: 'none' }}
                  colSpan={2}
                ></Styled.Column>
              </Styled.Row>
              <Styled.Row>
                <Styled.ColumnTitle>
                  <Text style={{ color: TEXT_COLOR }}>{String.shoken}</Text>
                </Styled.ColumnTitle>
                <Styled.Column colSpan={3}>
                  <InputTextArea
                    {...register('shoken')}
                    defaultValue={state.txtaShoken}
                    rows={8}
                    cols={70}
                    disableBorder
                  />
                </Styled.Column>
              </Styled.Row>
            </Styled.TBody>
          </Styled.Table>

          <ButtonType1
            title={String.nyuuryoku}
            type='submit'
            style={{ alignSelf: 'flex-end' }}
          />
        </Styled.ContentCol>
      </Container>
    </PopupLayout>
  )
}

export default PopupSentaku

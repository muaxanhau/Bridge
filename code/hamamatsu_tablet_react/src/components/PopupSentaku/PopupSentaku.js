import React, { useRef, useReducer, useEffect } from 'react'
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
import { useMutation, useQuery } from '../../utils/hooks'
import { useForm } from 'react-hook-form'

// constants
const TEXT_COLOR = 'var(--color-6)'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
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
    case 'SET_TXTA_SHOKEN':
      return {
        ...state,
        txtaShoken: action.payload
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
    txtaShoken: undefined,

    //=======================================
    dataListMBuzaiZairyou: [],
    dataListMDamageShurui: [],
    dataListMShindan: []
  })

  // constants
  const refBuzai = useRef()
  const refShurui = useRef()
  const refShindan = useRef()

  // query - mutation
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

  const mutationShokenTemplate = useMutation({
    queryString:
      SQLite.QueryString.MTenkenShokenTemplate.select.Shoken.by
        .CodeBuzaiZairyou_CodeDamageShurui_CodeShindan.pure,
    onSuccess: data => {
      if (!data.length) {
        dispatch({ type: 'SET_TXTA_SHOKEN', payload: '' })
      }

      dispatch({ type: 'SET_TXTA_SHOKEN', payload: data[0].SHOKEN })
    }
  })

  // handles
  const onChangeValue = () => {
    const buzai = refBuzai.current.value
    const shurui = refShurui.current.value
    const shindan = refShindan.current.value

    mutationShokenTemplate.execute([buzai, shurui, shindan])
  }
  const onSubmit = e => {
    e.preventDefault()

    onClickNyuuryoku(state.txtaShoken)
    onClickClose()
  }

  // effects
  useEffect(() => {
    hidden && dispatch({ type: 'SET_TXTA_SHOKEN', payload: '' })
  }, [hidden])

  // render
  if (hidden) {
    return null
  }

  return (
    <PopupLayout enableScroll={false}>
      <Container onSubmit={onSubmit}>
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
                    ref={refBuzai}
                    onChange={onChangeValue}
                  />
                </Styled.Column>
                <Styled.ColumnTitle>
                  <Text style={{ color: TEXT_COLOR }}>
                    {String.hante_kubun}
                  </Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <InputSelection
                    data={state.dataListMShindan}
                    ref={refShindan}
                    onChange={onChangeValue}
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
                    ref={refShurui}
                    onChange={onChangeValue}
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

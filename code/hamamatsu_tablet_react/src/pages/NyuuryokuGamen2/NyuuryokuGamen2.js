import React, { useReducer, useEffect } from 'react'
import { String, Images } from '../../constants'
import {} from './elements'
import {
  Styled,
  Text,
  ButtonType1,
  InputText,
  InputSelection,
  InputTextArea
} from './../../components'
import { IonContent } from '@ionic/react'

// constants

// reducer
const reducer = (state, action) => {
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
    default:
      return state
  }
}

// main
const NyuuryokuGamen2 = () => {
  // constants
  const [state, dispatch] = useReducer(reducer, {
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblKanrishamei: '',
    lblTenkenin: '',
    lblTenkenNengappi: ''
  })
  // handles

  // effects
  useEffect(() => {
    dispatch({
      type: 'SET_GROUP_HEADER',
      payload: {
        lblKyouryoumei: String.fairu_sentaku,
        lblRosenmei: String.fairu_sentaku,
        lblKanrishamei: String.fairu_sentaku,
        lblTenkenin: String.fairu_sentaku,
        lblTenkenNengappi: String.fairu_sentaku
      }
    })
  }, [])

  // render
  return (
    <>
      <Styled.Container style={{ padding: '0 var(--padding-1)' }}>
        <IonContent scrollY={true}>
          <Styled.Spacing1 />

          <Styled.ContentCol>
            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kyouryoumei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column rowSpan={2}>
                    <Text>{state.lblKyouryoumei}</Text>
                  </Styled.Column>

                  <Styled.ColumnTitle>
                    <Text>{String.rosenmei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblRosenmei}</Text>
                  </Styled.Column>

                  <Styled.ColumnTitle>
                    <Text>{String.tenkenin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblTenkenin}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kanrishamei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKanrishamei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.tenken_nengappi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblTenkenNengappi}</Text>
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.ContentRow>
              <Styled.Table>
                <Styled.TBody>
                  <Styled.Row>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.ColumnTitle disableMinWidth>
                      <Text>{String.hante_kubun}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column disableMinWidth>
                      <InputSelection />
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.Column style={{ textAlign: 'center' }}>
                      <Styled.Image src={Images.no_image} width='100%' />
                    </Styled.Column>
                    <Styled.Column colSpan={2}>
                      <Styled.ContentCol>
                        <ButtonType1
                          title={String.fairu_sentaku}
                          size='small'
                        />
                        <ButtonType1 title={String.kamera_kidou} size='small' />
                      </Styled.ContentCol>
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.Column colSpan={3}>
                      <InputTextArea
                        rows={2}
                        disableBorder
                        style={{ width: '100%' }}
                      />
                    </Styled.Column>
                  </Styled.Row>
                </Styled.TBody>
              </Styled.Table>

              <Styled.Table>
                <Styled.TBody>
                  <Styled.Row>
                    <Styled.Column>
                      <InputText disableBorder />
                    </Styled.Column>
                    <Styled.ColumnTitle disableMinWidth>
                      <Text>{String.hante_kubun}</Text>
                    </Styled.ColumnTitle>
                    <Styled.Column disableMinWidth>
                      <InputSelection />
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.Column style={{ textAlign: 'center' }}>
                      <Styled.Image src={Images.no_image} width='100%' />
                    </Styled.Column>
                    <Styled.Column colSpan={2}>
                      <Styled.ContentCol>
                        <ButtonType1
                          title={String.fairu_sentaku}
                          size='small'
                        />
                        <ButtonType1 title={String.kamera_kidou} size='small' />
                      </Styled.ContentCol>
                    </Styled.Column>
                  </Styled.Row>

                  <Styled.Row>
                    <Styled.Column colSpan={3}>
                      <InputTextArea
                        rows={2}
                        disableBorder
                        style={{ width: '100%' }}
                      />
                    </Styled.Column>
                  </Styled.Row>
                </Styled.TBody>
              </Styled.Table>
            </Styled.ContentRow>

            <Styled.ContentRow
              style={{
                justifyContent: 'center'
              }}
            >
              <ButtonType1
                title={String.gyou_tsuika}
                style={{ width: 'var(--button-width)' }}
              />
              <ButtonType1
                title={String.koushin}
                style={{ width: 'var(--button-width)' }}
              />
            </Styled.ContentRow>
          </Styled.ContentCol>

          <Styled.Spacing1 />
        </IonContent>
      </Styled.Container>
    </>
  )
}

export default NyuuryokuGamen2

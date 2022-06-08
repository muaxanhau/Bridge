import React, { useReducer, useEffect } from 'react'
import { String, Images } from '../../constants'
import { caretBackOutline, caretForwardOutline } from 'ionicons/icons'
import {} from './elements'
import {
  Styled,
  Text,
  Title,
  ButtonType1,
  ButtonType4,
  ButtonIcon,
  TextDate,
  InputCheckBox
} from './../../components'
import { IonContent } from '@ionic/react'

// constants
const BUTTON_ICON_COLOR = 'var(--color-8)'
const BUTTON_ICON_SIZE = '60px'

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
const GenkyouShashin = () => {
  // constants
  const [state, dispatch] = useReducer(reducer, {
    // GROUP_HEADER
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblKanrishamei: '',
    lblTenkenin: '',
    lblTenkenNengappi: {
      year: '',
      month: '',
      date: ''
    }

    //==========================================
  })

  // handles

  // effects
  useEffect(() => {
    dispatch({
      type: 'SET_GROUP_HEADER',
      payload: {
        lblKyouryoumei: String.buzai_bangou,
        lblRosenmei: String.buzai_bangou,
        lblKanrishamei: String.buzai_bangou,
        lblTenkenin: String.buzai_bangou,
        lblTenkenNengappi: { year: 2022, month: 5, date: 19 }
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
                    <TextDate
                      year={state.lblTenkenNengappi.year}
                      month={state.lblTenkenNengappi.month}
                      date={state.lblTenkenNengappi.date}
                    />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.ContentCol style={{ gap: 'var(--gap-2)' }}>
              {[...Array(5)].map((item, index) => (
                <Styled.ContentCol key={index.toString()}>
                  <Styled.ContentRow style={{ alignItems: 'center' }}>
                    <Title>
                      {String.sonohoka} {String.teiki_tenkensha}
                    </Title>
                    <ButtonType4 title={String.tsuika} />
                  </Styled.ContentRow>
                  <Styled.ContentRow
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <label htmlFor={index.toString()}>
                      <Text>{String.nashi}</Text>
                    </label>
                    <InputCheckBox id={index.toString()} />

                    <Styled.Image src={Images.no_image} style={{ flex: 1 }} />

                    <ButtonIcon
                      icon={caretBackOutline}
                      color={BUTTON_ICON_COLOR}
                      size={BUTTON_ICON_SIZE}
                    />
                    <Styled.Image src={Images.no_image} style={{ flex: 1 }} />
                    <ButtonIcon
                      icon={caretForwardOutline}
                      color={BUTTON_ICON_COLOR}
                      size={BUTTON_ICON_SIZE}
                    />
                  </Styled.ContentRow>
                </Styled.ContentCol>
              ))}
            </Styled.ContentCol>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.Column>
                    <Styled.ContentRow style={{ justifyContent: 'center' }}>
                      <ButtonType1
                        title={String.koushin}
                        style={{ minWidth: '20ch' }}
                      />
                    </Styled.ContentRow>
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

export default GenkyouShashin

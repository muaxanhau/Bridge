import React, { useReducer, useEffect } from 'react'
import { String, Images } from '../../constants'
import {} from './elements'
import {
  Styled,
  Text,
  ButtonType1,
  InputText,
  InputSelection,
  ButtonType4
} from '../../components'
import { IonContent } from '@ionic/react'

// constants
const TITLE_COLOR = 'var(--color-11)'
const INPUT_TEXT_WIDTH = '50px'

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

// main
const NyuuryokuGamen2Mizobashi = () => {
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
    lblKanrisha: '',
    lblKyouryouCode: ''
  })

  // handles

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
        lblFurigana: String.bikou,
        lblKyouryoumei: String.buzai,
        lblRosenmei: String.buzai_tani_no_shindan,
        lblKanrisha: String.buzai_tani_no_shindan,
        lblKyouryouCode: String.buzai_tani_no_shindan
      }
    })
  }, [])

  // render
  return (
    <Styled.Container style={{ padding: '0 var(--padding-1)' }}>
      <IonContent scrollY={true}>
        <Styled.Spacing1 />

        <Styled.ContentCol>
          <Text style={{ color: TITLE_COLOR, alignSelf: 'flex-end' }}>
            {String.buzaimei + ' (' + String.sono_konkai_tenken + '2)'}
          </Text>
          <Styled.Table style={{ width: 'fit-content', alignSelf: 'flex-end' }}>
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
                <Styled.Column colSpan={8}>
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
                <Styled.ColumnTitle>
                  <Text>
                    {String.furigana}
                    <br />
                    {String.kyouryoumei}
                  </Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <Text>
                    {state.lblFurigana}
                    <br />
                    {state.lblKyouryoumei}
                  </Text>
                </Styled.Column>

                <Styled.ColumnTitle>
                  <Text>{String.rosenmei}</Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <Text>{state.lblRosenmei}</Text>
                </Styled.Column>

                <Styled.ColumnTitle>
                  <Text>{String.kanrisha}</Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <Text>{state.lblKanrisha}</Text>
                </Styled.Column>

                <Styled.ColumnTitle>
                  <Text>{String.kyouryou_code}</Text>
                </Styled.ColumnTitle>
                <Styled.Column>
                  <Text>{state.lblKyouryouCode}</Text>
                </Styled.Column>
              </Styled.Row>
            </Styled.TBody>
          </Styled.Table>

          <Text style={{ color: TITLE_COLOR }}>
            {String.jian_quan_du_panding}
          </Text>
          <Styled.ContentRow style={{ overflow: 'scroll' }}>
            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={3} disableMinWidth>
                    <Text>{String.sonshou_shashin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.shashin_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.keikan_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.buzaimei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.buzai_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.sonshou_shurui}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={3} disableMinWidth>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column
                    colSpan={3}
                    disableMinWidth
                    style={{ textAlign: 'center' }}
                  >
                    <Styled.Image
                      src={Images.no_image}
                      style={{ width: '100%' }}
                    />
                  </Styled.Column>
                  <Styled.Column colSpan={2} disableMinWidth>
                    <Styled.ContentCol
                      style={{ gap: 'calc(var(--gap-2) * 1.5)' }}
                    >
                      <Styled.ContentCol>
                        <ButtonType4
                          title={String.fairu_sentaku}
                          size='small'
                        />
                        <ButtonType4 title={String.kamera_kidou} size='small' />
                      </Styled.ContentCol>

                      <ButtonType4 title={String.sakujo} size='small' />
                    </Styled.ContentCol>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.shoken}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={4} disableMinWidth>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={3} disableMinWidth>
                    <Text>{String.buzai_tani_kenzensei_shindan}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={2} disableMinWidth>
                    <InputSelection />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={3} disableMinWidth>
                    <Text>{String.sonshou_shashin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.shashin_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.keikan_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.buzaimei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.buzai_bangou}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column disableMinWidth>
                    <InputText
                      disableBorder
                      style={{ width: INPUT_TEXT_WIDTH }}
                    />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.sonshou_shurui}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={3} disableMinWidth>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Column
                    colSpan={3}
                    disableMinWidth
                    style={{ textAlign: 'center' }}
                  >
                    <Styled.Image
                      src={Images.no_image}
                      style={{ width: '100%' }}
                    />
                  </Styled.Column>
                  <Styled.Column colSpan={2} disableMinWidth>
                    <Styled.ContentCol>
                      <ButtonType4 title={String.fairu_sentaku} size='small' />
                      <ButtonType4 title={String.kamera_kidou} size='small' />
                    </Styled.ContentCol>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle disableMinWidth>
                    <Text>{String.shoken}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={4} disableMinWidth>
                    <InputText disableBorder style={{ width: '100%' }} />
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle colSpan={3} disableMinWidth>
                    <Text>{String.buzai_tani_kenzensei_shindan}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column colSpan={2} disableMinWidth>
                    <InputSelection />
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>
          </Styled.ContentRow>

          <Styled.ContentRow style={{ justifyContent: 'center' }}>
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
  )
}

export default NyuuryokuGamen2Mizobashi

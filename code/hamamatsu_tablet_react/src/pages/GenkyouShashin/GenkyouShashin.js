import React, { useReducer, useEffect } from 'react'
import { String, Images, SQLite } from '../../constants'
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
import { reducer } from './reducer'
import { useQuery } from '../../utils/hooks'
import { groupArrayOfObjects } from './../../utils/commons'

// constants
const BUTTON_ICON_COLOR = 'var(--color-8)'
const BUTTON_ICON_SIZE = '60px'

// main
const GenkyouShashin = ({ NO_GYOUMU, BRIDGE_ID }) => {
  // state
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
    },

    //==========================================

    dataListTenkenhyouGenkyou: []
  })

  // query - mutation
  const queryHeader = useQuery({
    queryString:
      SQLite.QueryString.select
        .NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken
        .by.NoGyoumu_BridgeID.pure,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data =>
      dispatch({
        type: 'SET_GROUP_HEADER',
        payload: {
          lblKyouryoumei: data[0]?.NAME_SHISETSU_TENKEN,
          lblRosenmei: data[0]?.NAME_ROSEN,
          lblKanrishamei: data[0]?.NAME_SOSHIKI,
          lblTenkenin: data[0]?.NAME_TENKENSHA,
          lblTenkenNengappi: {
            year: data[0]?.NENGAPPI_TENKEN.substring(0, 4),
            month: data[0]?.NENGAPPI_TENKEN.substring(4, 6),
            date: data[0]?.NENGAPPI_TENKEN.substring(6, 8)
          }
        }
      })
  })
  const queryMGenkyouShurui = useQuery({
    queryString:
      SQLite.QueryString.MGenkyouShurui.select
        .CodeGenkyouShurui_NameGenkyouShurui.orderBy.CodeGenkyouShurui.pure
  })
  const queryTenkenhyouGenkyou = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGenkyou.select
        .FlgTablet_CodeGenkyouShurui_NameFile_FullPath.by.NoGyoumu_BridgeID
        .pure,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data =>
      dispatch({
        type: 'SET_DATA_LIST_TENKENHYOU_GENKYOU',
        payload: data
      })
  })

  // handles

  // effects

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

            <Styled.Spacing1 />

            <Styled.ContentCol style={{ gap: 'var(--gap-2)' }}>
              {queryMGenkyouShurui.data.map((item, index) => (
                <Styled.ContentCol key={index.toString()}>
                  <Styled.ContentRow style={{ alignItems: 'center' }}>
                    <Title>{item.NAME_GENKYOU_SHURUI}</Title>
                    <ButtonType4 title={String.tsuika} />
                  </Styled.ContentRow>

                  <Styled.ContentRow
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <label htmlFor={index.toString()}>
                      <Text>{String.nashi}</Text>
                    </label>
                    <InputCheckBox id={index.toString()} />

                    <Styled.Image
                      src={(() => {
                        const fullpath = groupArrayOfObjects(
                          state.dataListTenkenhyouGenkyou,
                          'CODE_GENKYOU_SHURUI'
                        )[item.CODE_GENKYOU_SHURUI]?.filter(
                          item => item.FLG_TABLET === 0
                        )[0]?.FULL_PATH

                        return fullpath || Images.no_image
                      })()}
                      style={{ flex: 1 }}
                    />

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
                  <Styled.Column style={{ border: 'none' }}>
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

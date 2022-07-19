import React, { useReducer, useEffect, useState, useRef } from 'react'
import { String, Images, SQLite } from '../../constants'
import { caretBackOutline, caretForwardOutline } from 'ionicons/icons'
import { ImageInstance } from './elements'
import {
  Styled,
  Text,
  Title,
  ButtonType1,
  ButtonType4,
  ButtonIcon,
  TextDate,
  InputCheckBox,
  PopupTakePhoto
} from './../../components'
import { IonContent, useIonAlert } from '@ionic/react'
import { reducer } from './reducer'
import { useQuery, usePhotoGallery, useMutation } from '../../utils/hooks'
import {
  getBase64FromImage,
  generateImageNameFile,
  groupArrayOfObjects,
  getFullDateTimeRawDigit
} from './../../utils/commons'

// constants
const BUTTON_ICON_COLOR = 'var(--color-8)'
const BUTTON_ICON_SIZE = '60px'

// components
const GroupImage = ({
  NAME_GENKYOU_SHURUI,
  index,
  dataListTenkenhyouGenkyou,
  CODE_GENKYOU_SHURUI,
  onChangeList = list => {},
  onChangeChecked = (codeGenkyouShurui, isChecked) => {}
}) => {
  // constants
  const [data, setData] = useState()
  const [idx, setIdx] = useState(0)
  const [hidden, setHidden] = useState(true)
  const refCheckBox = useRef()

  // handles
  const handlePhoto = photo => {
    getBase64FromImage(photo.imageUrl, base64Img => {
      const tmpList = [...dataListTenkenhyouGenkyou]
      onChangeList([
        ...tmpList,
        {
          CODE_GENKYOU_SHURUI,
          FLG_TABLET: 1,
          FULL_PATH: base64Img,
          NAME_FILE: generateImageNameFile()
        }
      ])
    })
  }

  // effects
  useEffect(() => {
    setData(prev => (prev = dataListTenkenhyouGenkyou))
  }, [dataListTenkenhyouGenkyou])
  useEffect(() => {
    const hasData = groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
      CODE_GENKYOU_SHURUI
    ]?.length

    if (!hasData) {
      refCheckBox.current.checked = false
      onChangeChecked(CODE_GENKYOU_SHURUI, false)
      return
    }

    const imgIsNull = !groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
      CODE_GENKYOU_SHURUI
    ].filter(item => item.FLG_TABLET === 1)?.length

    if (!imgIsNull) {
      refCheckBox.current.checked = false
      onChangeChecked(CODE_GENKYOU_SHURUI, false)
      return
    }

    refCheckBox.current.checked = true
    onChangeChecked(CODE_GENKYOU_SHURUI, true)
  }, [data])

  // render
  return (
    <>
      <PopupTakePhoto
        hidden={hidden}
        onClickBackground={() => setHidden(prev => (prev = true))}
        onChangePhoto={handlePhoto}
      />

      <Styled.ContentCol key={index.toString()}>
        <Styled.ContentRow style={{ alignItems: 'center' }}>
          <Title>{NAME_GENKYOU_SHURUI}</Title>
          <ButtonType4
            title={String.tsuika}
            onClick={() => setHidden(prev => (prev = false))}
          />
        </Styled.ContentRow>

        <Styled.ContentRow
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <label htmlFor={index.toString()}>
            <Text>{String.nashi}</Text>
          </label>
          <InputCheckBox
            id={index.toString()}
            ref={refCheckBox}
            onChange={e =>
              onChangeChecked(CODE_GENKYOU_SHURUI, e.target.checked)
            }
          />

          <Styled.Image
            src={(() => {
              const fullpath = groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                CODE_GENKYOU_SHURUI
              ]?.filter(item => item.FLG_TABLET === 0)[0]?.FULL_PATH

              return fullpath
                ? String.base64RootImage + fullpath
                : Images.no_image
            })()}
            style={{ flex: 1 }}
          />

          <ButtonIcon
            icon={caretBackOutline}
            color={BUTTON_ICON_COLOR}
            size={BUTTON_ICON_SIZE}
            onClick={() => idx > 0 && setIdx(prev => (prev -= 1))}
            style={{
              opacity:
                !groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                  CODE_GENKYOU_SHURUI
                ] ||
                groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                  CODE_GENKYOU_SHURUI
                ]?.filter(item => item.FLG_TABLET === 1)?.length === 0 ||
                idx === 0
                  ? 0
                  : 1
            }}
          />

          {(() => {
            const fullpath = groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
              CODE_GENKYOU_SHURUI
            ]?.filter(item => item.FLG_TABLET === 1)[idx]?.FULL_PATH

            return fullpath ? (
              <Styled.Image
                src={String.base64RootImage + fullpath}
                style={{ flex: 1 }}
              />
            ) : (
              <ImageInstance
                style={{ flex: 1 }}
                onClick={() => setHidden(prev => (prev = false))}
              >
                <Text>{String.please_take_a_picture}</Text>
              </ImageInstance>
            )
          })()}

          <ButtonIcon
            icon={caretForwardOutline}
            color={BUTTON_ICON_COLOR}
            size={BUTTON_ICON_SIZE}
            onClick={() =>
              idx <
                groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                  CODE_GENKYOU_SHURUI
                ]?.filter(item => item.FLG_TABLET === 1)?.length -
                  1 && setIdx(prev => (prev += 1))
            }
            style={{
              opacity:
                !groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                  CODE_GENKYOU_SHURUI
                ] ||
                groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                  CODE_GENKYOU_SHURUI
                ]?.filter(item => item.FLG_TABLET === 1)?.length === 0 ||
                idx ===
                  groupArrayOfObjects(data, 'CODE_GENKYOU_SHURUI')[
                    CODE_GENKYOU_SHURUI
                  ]?.filter(item => item.FLG_TABLET === 1)?.length -
                    1
                  ? 0
                  : 1
            }}
          />
        </Styled.ContentRow>
      </Styled.ContentCol>
    </>
  )
}

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

    dataListTenkenhyouGenkyou: [],
    dataListNashi: []
  })

  // constants
  const [present] = useIonAlert()

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
        .CodeGenkyouShurui_NameGenkyouShurui.orderBy.CodeGenkyouShurui.pure,
    onSuccess: data => {
      dispatch({
        type: 'SET_DATA_LIST_NASHI',
        payload: data.map(item => ({ ...item, isChecked: false }))
      })
    }
  })
  const queryTenkenhyouGenkyou = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGenkyou.select
        .FlgTablet_CodeGenkyouShurui_GazouID_NameFile_FullPath.by
        .NoGyoumu_BridgeID.pure,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      console.log('=================')
      console.log(data)
      dispatch({
        type: 'SET_DATA_LIST_TENKENHYOU_GENKYOU',
        payload: data
      })
    }
  })

  const mutationUpdateTenkenhyoGenkyou = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGenkyou.insert_update.FullPath.by
        .NoGyoumu_BridgeID_FlgTablet_CodeGenkyouShurui_NameFile.pure
  })

  // handles
  const handleOnChangeListGroupImage = list => {
    dispatch({
      type: 'SET_DATA_LIST_TENKENHYOU_GENKYOU',
      payload: list
    })
  }
  const handleOnChangeNashiGroupImage = (code, isChecked) => {
    dispatch({
      type: 'UPDATE_DATA_LIST_NASHI',
      payload: {
        code,
        isChecked
      }
    })
  }
  const handleSubmit = async () => {
    const dataGrouped = groupArrayOfObjects(
      state.dataListTenkenhyouGenkyou,
      'CODE_GENKYOU_SHURUI'
    )

    let nameGenkyouShuruiInvalidArr = []
    state.dataListNashi.forEach(item => {
      const listByGenkyouShurui = dataGrouped[item.CODE_GENKYOU_SHURUI]

      if (!listByGenkyouShurui && !item.isChecked) {
        nameGenkyouShuruiInvalidArr.push(item.NAME_GENKYOU_SHURUI)

        return
      }

      if (
        !listByGenkyouShurui?.filter(item => !!item.FULL_PATH).length &&
        !item.isChecked
      ) {
        nameGenkyouShuruiInvalidArr.push(item.NAME_GENKYOU_SHURUI)

        return
      }
    })

    if (nameGenkyouShuruiInvalidArr.length) {
      present({
        message: `${String.E0004}${nameGenkyouShuruiInvalidArr.map(
          item => `\n・${item}`
        )}`,
        buttons: ['Ok']
      })

      return
    }

    for (let i = 0; i < state.dataListTenkenhyouGenkyou.length; i++) {
      const item = state.dataListTenkenhyouGenkyou[i]
      console.log(item)

      await mutationUpdateTenkenhyoGenkyou.execute([
        NO_GYOUMU,
        BRIDGE_ID,
        item.FLG_TABLET,
        item.CODE_GENKYOU_SHURUI,
        item.NAME_FILE,
        item.FULL_PATH,
        item.NAME_FILE,
        item.FULL_PATH
      ])
    }
  }

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
                <GroupImage
                  key={index.toString()}
                  NAME_GENKYOU_SHURUI={item.NAME_GENKYOU_SHURUI}
                  index={index}
                  dataListTenkenhyouGenkyou={state.dataListTenkenhyouGenkyou}
                  CODE_GENKYOU_SHURUI={item.CODE_GENKYOU_SHURUI}
                  onChangeList={handleOnChangeListGroupImage}
                  onChangeChecked={handleOnChangeNashiGroupImage}
                />
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
                        onClick={handleSubmit}
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

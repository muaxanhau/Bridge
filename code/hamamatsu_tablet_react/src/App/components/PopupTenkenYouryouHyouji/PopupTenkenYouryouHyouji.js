import React, { useEffect, useReducer, useRef } from 'react'
import { SQLite } from './../../constants'
import { Container, ImageContainer } from './elements'
import {
  chevronBackOutline,
  chevronForwardOutline,
  closeCircleSharp
} from 'ionicons/icons'
import { String, DummyData, Images } from './../../constants'
import PopupLayout from '../PopupLayout/PopupLayout'
import Styled from './../Styled/Styled'
import InputSelection from './../InputSelection/InputSelection'
import Text from './../Text/Text'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import ButtonType1 from './../ButtonType1/ButtonType1'
import PopupPhoto from '../PopupPhoto/PopupPhoto'
import { useMutation, useQuery } from '../../utils/hooks'
import { reducer } from './reducer'

// constants
const BUTTON_ICON_SIZE = '15vw'
const BUTTON_ICON_COLOR = 'var(--color-9)'

// main
const PopupTenkenYouryouHyouji = ({
  hidden = false,
  onClickClose = () => {},
  onClickNyuuryoku = ({ buzai, shindan, shurui }) => {}
}) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    dataListImage: [],

    //=======================================
    showPhotoPopup: false,
    imagePopupSrc: null,

    //=======================================
    dataListMShindan: [],
    dataListBuzai: [],
    dataListMDamageShurui: [],

    indexImageSelected: undefined
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
  const queryMDamageShuruiTablet = useQuery({
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
  const mutationFileName = useMutation({
    queryString:
      SQLite.QueryString.MTenkenHanrei.select.NoFile_NameFile.by
        .CodeBuzaiZairyou_CodeDamageShuruiTablet_CodeShindan.orderBy.NoFile.asc,
    onSuccess: data => {
      let listImage = []
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const { NO_FILE, NAME_FILE } = item
        listImage.push({
          NO_FILE,
          src: require(`./../../assets/M_TENKEN_HANREI_IMAGE/${NAME_FILE}`)
        })
      }

      dispatch({ type: 'SET_DATA_LIST_IMAGE', payload: listImage })
      dispatch({
        type: 'SET_INDEX_IMAGE_SELECTED',
        payload: listImage.length ? 0 : -1
      })
    }
  })

  // handles
  const handleShowPhotoPopup = imageSrc => {
    dispatch({ type: 'SHOW_PHOTO_POPUP', payload: imageSrc })
  }
  const handleHidePhotoPopup = () => {
    dispatch({ type: 'HIDE_PHOTO_POPUP' })
  }
  const onSubmit = e => {
    e.preventDefault()
    const buzai = refBuzai.current.value
    const shindan = refShindan.current.value
    const shurui = refShurui.current.value

    onClickNyuuryoku({ shindan, shurui })
    onClickClose()
  }

  useEffect(() => {
    if (hidden) {
      dispatch({ type: 'SET_DATA_LIST_IMAGE', payload: [] })
      dispatch({ type: 'SET_INDEX_IMAGE_SELECTED', payload: -1 })
    }
  }, [hidden])

  // render
  if (hidden) {
    return null
  }

  return (
    <>
      <PopupLayout enableScroll={false}>
        <Container onSubmit={onSubmit}>
          <Styled.ContentCol>
            <ButtonIcon
              icon={closeCircleSharp}
              size='40px'
              style={{ alignSelf: 'flex-end' }}
              onClick={onClickClose}
            />
            <Styled.ContentRow style={{ gap: 'var(--gap-2)' }}>
              {!state.dataListImage.length && (
                <Styled.Image src={Images.no_image} width='40%' />
              )}

              {!!state.dataListImage.length && (
                <ImageContainer>
                  <ButtonIcon
                    icon={chevronBackOutline}
                    color={BUTTON_ICON_COLOR}
                    size={BUTTON_ICON_SIZE}
                    style={{
                      opacity: state.indexImageSelected === 0 ? 0 : 1
                    }}
                    onClick={() =>
                      dispatch({ type: 'DECREACE_INDEX_IMAGE_SELECTED' })
                    }
                  />
                  <Styled.Image
                    src={state.dataListImage[state.indexImageSelected]?.src}
                    width='auto'
                    onClick={() =>
                      handleShowPhotoPopup(
                        state.dataListImage[state.indexImageSelected]?.src
                      )
                    }
                  />
                  <ButtonIcon
                    icon={chevronForwardOutline}
                    color={BUTTON_ICON_COLOR}
                    size={BUTTON_ICON_SIZE}
                    style={{
                      opacity:
                        state.indexImageSelected ===
                        state.dataListImage.length - 1
                          ? 0
                          : 1
                    }}
                    onClick={() =>
                      dispatch({ type: 'INCREACE_INDEX_IMAGE_SELECTED' })
                    }
                  />
                </ImageContainer>
              )}

              <Styled.ContentCol>
                <Styled.Table>
                  <Styled.TBody>
                    <Styled.Row>
                      <Styled.ColumnTitle>
                        <Text style={{ color: 'var(--color-6)' }}>
                          {String.buzai}
                        </Text>
                      </Styled.ColumnTitle>
                      <Styled.Column>
                        <InputSelection
                          data={state.dataListBuzai}
                          ref={refBuzai}
                          onChange={() =>
                            mutationFileName.execute([
                              refBuzai.current.value,
                              refShurui.current.value,
                              refShindan.current.value
                            ])
                          }
                        />
                      </Styled.Column>
                    </Styled.Row>
                    <Styled.Row>
                      <Styled.ColumnTitle>
                        <Text style={{ color: 'var(--color-6)' }}>
                          {String.hante_kubun}
                        </Text>
                      </Styled.ColumnTitle>
                      <Styled.Column>
                        <InputSelection
                          data={state.dataListMDamageShurui}
                          ref={refShurui}
                          onChange={() =>
                            mutationFileName.execute([
                              refBuzai.current.value,
                              refShurui.current.value,
                              refShindan.current.value
                            ])
                          }
                        />
                      </Styled.Column>
                    </Styled.Row>
                    <Styled.Row>
                      <Styled.ColumnTitle>
                        <Text style={{ color: 'var(--color-6)' }}>
                          {String.henjou_shurui}
                        </Text>
                      </Styled.ColumnTitle>
                      <Styled.Column>
                        <InputSelection
                          data={state.dataListMShindan}
                          ref={refShindan}
                          onChange={() =>
                            mutationFileName.execute([
                              refBuzai.current.value,
                              refShurui.current.value,
                              refShindan.current.value
                            ])
                          }
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
            </Styled.ContentRow>
          </Styled.ContentCol>
        </Container>
      </PopupLayout>

      <PopupPhoto
        hidden={!state.showPhotoPopup}
        image={state.imagePopupSrc}
        onClickBackground={handleHidePhotoPopup}
      />
    </>
  )
}

export default PopupTenkenYouryouHyouji

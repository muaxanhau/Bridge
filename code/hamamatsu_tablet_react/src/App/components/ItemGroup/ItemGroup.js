import React, { useRef, useEffect } from 'react'
import {
  IonItem,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonIcon
} from '@ionic/react'
import { radioButtonOnOutline } from 'ionicons/icons'
import Text from '../Text/Text'

// constansts
const ITEM_STYLE = {
  marginLeft: 'calc(var(--padding-1) / 2)'
}
const ITEM_ICON = radioButtonOnOutline

// main
const ItemGroup = ({
  data = [{ title: '', child: [{ title: '', onClick: () => {} }] }]
}) => {
  // constants
  const refAccordionGroup = useRef()

  // effects
  useEffect(() => {
    setTimeout(() => {
      refAccordionGroup.current.value = data.map((_, index) => index.toString())
    }, 100)
  }, [])

  // render
  return (
    <IonAccordionGroup multiple ref={refAccordionGroup}>
      {data.map((item, indexG) => (
        <IonAccordion key={'g-' + indexG.toString()} value={indexG.toString()}>
          <IonItem slot='header'>
            <Text>{item.title}</Text>
          </IonItem>

          <IonList slot='content'>
            {item.child.map((item, indexI) => (
              <IonItem
                key={'i-' + indexI.toString()}
                onClick={() => item.onClick()}
              >
                <IonIcon icon={ITEM_ICON} style={ITEM_STYLE} />
                <Text style={ITEM_STYLE}>{item.title}</Text>
              </IonItem>
            ))}
          </IonList>
        </IonAccordion>
      ))}
    </IonAccordionGroup>
  )
}

export default ItemGroup

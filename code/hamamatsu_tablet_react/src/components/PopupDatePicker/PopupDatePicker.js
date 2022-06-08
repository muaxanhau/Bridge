import React, { useState, useEffect } from 'react'
import PopupLayout from '../PopupLayout/PopupLayout'
import {} from './elements'
import { IonDatetime } from '@ionic/react'

// constants
const DEFAULT_DATE = undefined

// main
const PopupDatePicker = ({
  initialDate = DEFAULT_DATE,
  hidden = false,
  onClickBackground = () => {},
  onChangeDate = date => {}
}) => {
  // constants
  const [selectedDate, setSelectedDate] = useState(initialDate)

  // effects
  useEffect(() => {
    onChangeDate(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    setSelectedDate(prev => (prev = initialDate))
  }, [initialDate])

  // render
  if (hidden) {
    return null
  }

  return (
    <PopupLayout onClickBackground={onClickBackground} enableScroll={false}>
      <IonDatetime
        presentation='date'
        value={selectedDate}
        onIonChange={e => setSelectedDate(prev => (prev = e.detail.value))}
      ></IonDatetime>
    </PopupLayout>
  )
}

export default PopupDatePicker

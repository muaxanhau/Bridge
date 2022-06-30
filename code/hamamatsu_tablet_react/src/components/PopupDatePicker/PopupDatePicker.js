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
    const day = new Date(selectedDate)

    const yyyy = day.getFullYear()
    let mm = day.getMonth() + 1
    let dd = day.getDate()

    mm = mm < 10 ? `0${mm.toString()}` : mm
    dd = dd < 10 ? `0${dd.toString()}` : dd

    const date = yyyy + '-' + mm + '-' + dd
    onChangeDate(date)
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
      />
    </PopupLayout>
  )
}

export default PopupDatePicker

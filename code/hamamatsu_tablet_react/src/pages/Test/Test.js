import React, { useState, useEffect } from 'react'
import { CSV } from '../../constants'
import { Styled } from './../../components'
import { IonButton } from '@ionic/react'
import { IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet.offline'
import 'leaflet/dist/leaflet.css'
import { getIconMaker } from '../../utils/commons'
import { usePapaParse } from 'react-papaparse'

const Photo = () => {
  const [photos, setPhotos] = useState([])

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    const fileName = new Date().getTime() + '.jpeg'
    const imageUrl = photo.webPath

    const newPhotos = [
      {
        fileName,
        imageUrl
      },
      ...photos
    ]
    setPhotos(prev => (prev = newPhotos))
  }

  const getPhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    })

    const fileName = new Date().getTime() + '.jpeg'
    const imageUrl = photo.webPath

    const newPhotos = [
      {
        fileName,
        imageUrl
      },
      ...photos
    ]
    setPhotos(prev => (prev = newPhotos))
  }

  return (
    <IonContent>
      <IonButton onClick={takePhoto}>take photo</IonButton>
      <IonButton onClick={getPhoto}>get photo</IonButton>

      <IonGrid>
        <IonRow>
          {photos.map((photo, _) => (
            <IonCol size='6' key={_.toString()}>
              <IonImg src={photo.imageUrl} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}
const MapOffline = () => {
  const [map, setMap] = useState()

  useEffect(() => {
    if (map) {
      const tileLayerOffline = L.tileLayer.offline(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          minZoom: 13
        }
      )

      tileLayerOffline.addTo(map)

      const controlSaveTiles = L.control.savetiles(tileLayerOffline, {
        zoomlevels: [13, 14, 15, 16] // optional zoomlevels to save, default current zoomlevel
      })

      map && controlSaveTiles.addTo(map)
    }
  }, [map])

  return (
    <MapContainer
      style={{ width: '100vw', height: '100vh' }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={[51.505, -0.09]} icon={getIconMaker(4)} />
    </MapContainer>
  )
}
const CSVTest = () => {
  const { readRemoteFile } = usePapaParse()
  const readFile = () => {
    readRemoteFile(CSV.Bridge, {
      complete: results => {
        console.log('---------------------------')
        console.log(results.data)
        console.log('---------------------------')

        console.log(results.data[1][5])
        results.data[1][5].split('').map(ch => {
          console.log(ch.charCodeAt(0))
        })
      }
    })
  }

  const readPure = () => {
    const contentType = 'text/csv'
    const csvFile = new Blob([CSV.Bridge], { type: contentType })
    const file = new File([CSV.Bridge], 'BRIDGE.csv', { type: contentType })

    const reader = new FileReader()
    reader.onload = e => {
      console.log(e.target.result)
    }
    reader.readAsText(file)
  }

  useEffect(() => {
    // readFile()
    readPure()
  }, [])

  return <Styled.Container style={{ backgroundColor: 'violet' }} />
}

const Test = () => {
  return (
    <>
      {/* <Photo /> */}
      {/* <MapOffline /> */}
      <CSVTest />
    </>
  )
}

export default Test

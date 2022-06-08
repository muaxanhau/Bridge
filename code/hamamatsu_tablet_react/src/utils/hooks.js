import { useState, useEffect, useContext } from 'react'
import { CSV, SQLite } from '../constants'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import L from 'leaflet'
import 'leaflet.offline'
import { AppContext } from './../globalStates/AppProvider'
import { executeQuery, objectToString } from './commons'
import { usePapaParse } from 'react-papaparse'

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState([])

  const takePhoto = async ({
    onSuccess = (
      photo = {
        fileName: '',
        imageUrl: ''
      }
    ) => {},
    onError = e => {},
    onFinally = () => {}
  }) => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      })

      const fileName = new Date().getTime() + '.jpeg'
      const imageUrl = photo.webPath
      const newPhoto = {
        fileName,
        imageUrl
      }

      const newPhotos = [...photos, newPhoto]
      setPhotos(prev => (prev = newPhotos))

      onSuccess(newPhoto)
    } catch (e) {
      onError(e)
    }
    onFinally()
  }

  const getGallery = async ({
    onSuccess = (
      photo = {
        fileName: '',
        imageUrl: ''
      }
    ) => {},
    onError = e => {},
    onFinally = () => {}
  }) => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 100
      })

      const fileName = new Date().getTime() + '.jpeg'
      const imageUrl = photo.webPath
      const newPhoto = {
        fileName,
        imageUrl
      }

      const newPhotos = [...photos, newPhoto]
      setPhotos(prev => (prev = newPhotos))

      onSuccess(newPhoto)
    } catch (e) {
      onError(e)
    }
    onFinally()
  }

  return { photos, takePhoto, getGallery }
}
export const useMapOffline = () => {
  const [map] = useState()

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
}
export const useQuery = ({
  queryString = '',
  params = [],
  enable = true,
  onSuccess = () => {},
  onError = () => {}
}) => {
  const { loaderTurnOn, loaderTurnOff } = useContext(AppContext)
  const [data, setDate] = useState([])

  const handleQuery = async () => {
    try {
      loaderTurnOn()

      const d = await executeQuery(queryString, params)
      setDate(prev => (prev = d))
      onSuccess(d)

      return d
    } catch (e) {
      onError(e)

      return e
    } finally {
      loaderTurnOff()
    }
  }

  useEffect(() => {
    if (params.some(item => !item)) {
      return
    }

    enable && handleQuery()
  }, [objectToString(params)])

  return { data, reExecute: handleQuery }
}
export const useMutation = ({
  queryString = '',
  onSuccess = () => {},
  onError = () => {}
}) => {
  const { loaderTurnOn, loaderTurnOff } = useContext(AppContext)
  const [data, setData] = useState([])

  const handleQuery = async (params = []) => {
    try {
      loaderTurnOn()

      const d = await executeQuery(queryString, params)
      setData(prev => (prev = d))
      onSuccess(d)

      return d
    } catch (e) {
      onError(e)

      return e
    } finally {
      loaderTurnOff()
    }
  }

  return { data, execute: handleQuery }
}
export const useImportCSV = () => {
  const { readRemoteFile } = usePapaParse()

  const insertData = (queryString = '', data = []) => {
    const COLUMN = data[0]?.length || 0
    data.forEach((item, index) => {
      if (index === 0 || item.length !== COLUMN) {
        return
      }

      executeQuery(queryString, item)
    })
  }

  //===============================================
  const importCSVMGyoumu = () => {
    readRemoteFile(CSV.MGyoumu, {
      complete: results => {
        const { data } = results

        insertData(SQLite.QueryString.MGyoumu.insert.fullColumn, data)
      }
    })
  }
  const importCSVBridge = () => {
    readRemoteFile(CSV.Bridge, {
      complete: results => {
        const { data } = results

        insertData(SQLite.QueryString.Bridge.insert.fullColumn, data)
      }
    })
  }
  const importCSVTenkenRireki = () => {
    readRemoteFile(CSV.TenkenRireki, {
      complete: results => {
        const { data } = results

        insertData(SQLite.QueryString.TenkenRireki.insert.fullColumn, data)
      }
    })
  }
  const importCSVTenkenRirekiTemp = () => {
    readRemoteFile(CSV.TenkenRireki, {
      complete: results => {
        const { data } = results

        insertData(SQLite.QueryString.TenkenRirekiTemp.insert.fullColumn, data)
      }
    })
  }
  const importCSVMShindan = () => {
    readRemoteFile(CSV.MShindan, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.MShindan.insert.withNoGyoumuAutoIncrement,
          data
        )
      }
    })
  }
  const importCSVTenkenhyoGazouTemp = () => {
    readRemoteFile(CSV.TenkenhyoGazou, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.TenkenhyoGazouTemp.insert
            .NoGyoumu_BridgeID_GazouID_NoShashin_NameBuzai_NoBuzai_DamageShurui_Keikan_ShindanTenken_Bikou_HoushinChousa_HoushinSochi_NameFile,
          data.map(item => [1, ...item, 1])
        )
      }
    })
  }
  const importCSVMTenkenShokenTemplate = () => {
    readRemoteFile(CSV.MTenkenShokenTemplate, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.MTenkenShokenTemplate.insert.fullColumn,
          data
        )
      }
    })
  }
  const importCSVMBuzaiZairyou = () => {
    readRemoteFile(CSV.MBuzaiZairyou, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.MBuzaiZairyou.insert.withNoGyoumuAutoIncrement,
          data
        )
      }
    })
  }
  const importCSVMDamageShurui = () => {
    readRemoteFile(CSV.MDamageShurui, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.MDamageShurui.insert.withNoGyoumuAutoIncrement,
          data
        )
      }
    })
  }
  const importCSVMDamageShuruiTablet = () => {
    readRemoteFile(CSV.MDamageShuruiTablet, {
      complete: results => {
        const { data } = results

        insertData(
          SQLite.QueryString.MDamageShuruiTablet.insert.fullColumn,
          data
        )
      }
    })
  }
  const importCSVMTenkenHanrei = () => {
    readRemoteFile(CSV.MTenkenHanrei, {
      complete: results => {
        const { data } = results

        insertData(SQLite.QueryString.MTenkenHanrei.insert.fullColumn, data)
      }
    })
  }

  const execute = () => {
    importCSVMGyoumu()
    importCSVBridge()
    importCSVTenkenRireki()
    importCSVTenkenRirekiTemp()
    importCSVMShindan()
    importCSVTenkenhyoGazouTemp()
    importCSVMTenkenShokenTemplate()
    importCSVMBuzaiZairyou()
    importCSVMDamageShurui()
    importCSVMDamageShuruiTablet()
    importCSVMTenkenHanrei()
  }

  return { execute }
}

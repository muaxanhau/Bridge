import { SQLite } from '@awesome-cordova-plugins/sqlite'
import {
  SQLite as SQLiteConstans,
  DefaultValues,
  Images,
  String
} from '../constants'
import L from 'leaflet'

// =====================================================================
export const getRandomInteger = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const getRandomFakeString = () => {
  return Object.values(String)[
    getRandomInteger(16, Object.keys(String).length - 1)
  ]
}
export const getImageShindan = code => {
  const images = {
    '0': Images.marker00,
    '1': Images.marker01,
    '2': Images.marker02,
    '3': Images.marker03,
    '4': Images.marker04
  }
  return images[code]
}
export const getDateNowString = () => {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = ('0' + (d.getMonth() + 1)).slice(-2)
  const dd = ('0' + d.getDate()).slice(-2)
  const today = yyyy + '-' + mm + '-' + dd

  return today
}
export const convertCoordinateToDecimal = (coor = '') => {
  const d = parseInt(coor.substring(0, coor.lastIndexOf('°')))
  const min = parseInt(
    coor.substring(coor.indexOf('°') + 1, coor.lastIndexOf('’'))
  )
  const sec = parseInt(
    coor.substring(coor.indexOf('’') + 1, coor.lastIndexOf('″'))
  )

  const DD = d + min / 60 + sec / 3600
  return DD
}
export const convertDate = (date = '') => {
  if (date.length !== 8) {
    return null
  }

  const yyyy = date.substring(0, 4)
  const mm = date.substring(4, 6)
  const dd = date.substring(6, 8)
  return yyyy + '-' + mm + '-' + dd
}
export const objectToString = (obj = {}) => {
  return Object.values(obj)
    .sort((a, b) => a.toString().localeCompare(b.toString()))
    .toString()
}
export const getBase64FromImage = (imgUrl, callback) => {
  let img = new Image()

  // onload fires when the image is fully loadded, and has width and height

  img.onload = function () {
    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    let dataURL = canvas.toDataURL('image/png')
    dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, '')

    callback(dataURL) // the base64 string
  }

  // set attributes and src
  img.setAttribute('crossOrigin', 'anonymous') //
  img.src = imgUrl
}
export const getImageFromBase64 = (base64img, callback) => {
  let img = new Image()
  img.onload = function () {
    callback(img)
  }
  img.src = String.base64RootImage + base64img
}
export const getUUID = () => {
  const today = new Date()

  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const time =
    today.getHours() +
    ':' +
    today.getMinutes() +
    ':' +
    today.getSeconds() +
    ':' +
    today.getMilliseconds()

  const dateTime = date + ' ' + time

  return dateTime
}

// leaflet =============================================================
export const getIconMaker = code => {
  const iconArr = {
    '0': Images.marker00,
    '1': Images.marker01,
    '2': Images.marker02,
    '3': Images.marker03,
    '4': Images.marker04
  }

  return new L.Icon({
    iconUrl: iconArr[code],
    iconRetinaUrl: iconArr[code],
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30)
  })
}

// SQLite ==============================================================
const getDB = async () => {
  return await SQLite.create({
    name: SQLiteConstans.Config.name,
    location: SQLiteConstans.Config.location
  })
}
const parseDataSQLite = data => {
  let items = []
  if (data.rows.length > 0) {
    for (let i = 0; i < data.rows.length; i++) {
      items.push(data.rows.item(i))
    }
  }

  return items
}
const createTables = async () => {
  try {
    const db = await getDB()

    await db.executeSql(SQLiteConstans.QueryString.LoginUser.create.table, [])
    await db.executeSql(SQLiteConstans.QueryString.MGyoumu.create.table, [])
    await db.executeSql(SQLiteConstans.QueryString.Bridge.create.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenRireki.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenRirekiTemp.create.table,
      []
    )
    await db.executeSql(SQLiteConstans.QueryString.BuzaiHyouka.create.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGazou.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGazouTemp.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGenkyou.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MBuzaiZairyou.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MDamageShurui.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MGenkyouShurui.create.table,
      []
    )
    await db.executeSql(SQLiteConstans.QueryString.MShindan.create.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.MTenkenShokenTemplate.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MTenkenHanrei.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MDamageShuruiTablet.create.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MBuzaiTenkenhyo.create.table,
      []
    )
  } catch (e) {
    console.log(e)
  }
}
const deleteDataTables = async () => {
  try {
    const db = await getDB()

    await db.executeSql(SQLiteConstans.QueryString.LoginUser.delete.table, [])
    await db.executeSql(SQLiteConstans.QueryString.MGyoumu.delete.table, [])
    await db.executeSql(SQLiteConstans.QueryString.Bridge.delete.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenRireki.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenRirekiTemp.delete.table,
      []
    )
    await db.executeSql(SQLiteConstans.QueryString.BuzaiHyouka.delete.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGazou.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGazouTemp.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.TenkenhyoGenkyou.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MBuzaiZairyou.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MDamageShurui.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MGenkyouShurui.delete.table,
      []
    )
    await db.executeSql(SQLiteConstans.QueryString.MShindan.delete.table, [])
    await db.executeSql(
      SQLiteConstans.QueryString.MTenkenShokenTemplate.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MTenkenHanrei.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MDamageShuruiTablet.delete.table,
      []
    )
    await db.executeSql(
      SQLiteConstans.QueryString.MBuzaiTenkenhyo.delete.table,
      []
    )
  } catch (e) {
    console.log(e)
  }
}
const insertDefaultLoginUser = async () => {
  for (let i = 0; i < DefaultValues.Users.length; i++) {
    const { username, password } = DefaultValues.Users[i]

    const isExisted = !!(
      await executeQuery(
        SQLiteConstans.QueryString.LoginUser.select.LoginID.by.LoginID_Password
          .pure,
        [username, password]
      )
    ).length
    !isExisted &&
      (await executeQuery(
        SQLiteConstans.QueryString.LoginUser.insert.fullColumn,
        [username, password]
      ))
  }
}
const insertDefaultData = async () => {
  await insertDefaultLoginUser()
}
//=================================
export const setupSQLite = async () => {
  await createTables()
  await deleteDataTables() // for fake data - remove in prod mode
  await insertDefaultData()
}
export const executeQuery = async (queryString, params = []) => {
  try {
    const db = await getDB()

    const data = await db.executeSql(queryString, params)

    return parseDataSQLite(data)
  } catch (e) {
    console.log(e)
  }
}

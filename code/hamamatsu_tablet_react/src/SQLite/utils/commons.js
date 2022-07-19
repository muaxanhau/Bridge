import { SQLite } from '@awesome-cordova-plugins/sqlite'
import { Config } from './../constants'

// ======================================================================
// ======================================================================
// ========================= private functions ==========================
// ======================================================================
// ======================================================================

const getDB = async () => {
  const { name, location } = Config

  return await SQLite.create({
    name,
    location
  })
}

const convertSQLiteDataToArray = data => {
  let items = []

  for (let i = 0; i < data.rows.length; i++) {
    items.push(data.rows.item(i))
  }

  return items
}

// ======================================================================
// ======================================================================
// ========================== public functions ==========================
// ======================================================================
// ======================================================================

export const executeQuery = async ({ queryString, params = [] }) => {
  try {
    const db = await getDB()

    const data = await db.executeSql(queryString, params)

    return convertSQLiteDataToArray(data)
  } catch (e) {
    console.log(e)

    return []
  }
}

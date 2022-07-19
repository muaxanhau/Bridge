import { useCallback, useEffect, useState } from 'react'
import {
  useQuery,
  useMutation,
  useIsMutating,
  useIsFetching
} from 'react-query'
import { executeQuery } from './../utils/commons'
import { getID } from './../../utils/commons'
import { QueryStrings } from './../constants'

// ======================================================================
// ======================================================================
// ========================= private functions ==========================
// ======================================================================
// ======================================================================

const fetchSQLite = async ({ queryString, params }) => {
  const data = await executeQuery({ queryString, params })

  return data
}

const useSQLiteQuery = ({
  primaryKey,
  queryString = '',
  params = [],
  select = data => {
    return data
  },
  onSuccess = data => {},
  onError = e => {},
  onSettled = data => {}
}) => {
  const { data, refetch } = useQuery(
    [primaryKey || getID(), params],
    () => fetchSQLite({ queryString, params }),
    {
      onSuccess,
      onError,
      onSettled
    }
  )
  const [response, setResponse] = useState()

  useEffect(() => {
    const cData = select(data)

    setResponse(prev => (prev = cData))
  }, [data])

  return { response, refetch }
}

const useSQLiteMutation = ({
  queryString = '',
  select = data => {
    return data
  },
  onSuccess = data => {},
  onError = e => {},
  onSettled = data => {},
  onMutate = () => {}
}) => {
  const { data, mutate } = useMutation(
    params => fetchSQLite({ queryString, params }),
    {
      onSuccess: data => {
        const cData = select(data)

        onSuccess(cData)
      },
      onError,
      onSettled,
      onMutate
    }
  )
  const [response, setResponse] = useState()

  useEffect(() => {
    const cData = select(data)

    setResponse(prev => (prev = cData))
  }, [JSON.stringify(data)])

  return { response, mutate }
}

// ======================================================================
// ======================================================================
// ========================== public functions ==========================
// ======================================================================
// ======================================================================

export const useSQLiteIsRunning = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return isFetching || isMutating
}

// create tables ==============================================
export const useSQLiteQuery_createTableUser = () =>
  useSQLiteQuery({
    queryString: QueryStrings.LoginUser.create.Table
  })
export const useSQLiteQuery_createTableMGyoumu = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MGyoumu.create.Table
  })
export const useSQLiteQuery_createTableBridge = () =>
  useSQLiteQuery({
    queryString: QueryStrings.Bridge.create.Table
  })
export const useSQLiteQuery_createTableTenkenRireki = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenRireki.create.Table
  })
export const useSQLiteQuery_createTableTenkenRirekiTemp = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenRirekiTemp.create.Table
  })
export const useSQLiteQuery_createTableBuzaiHyouka = () =>
  useSQLiteQuery({
    queryString: QueryStrings.BuzaiHyouka.create.Table
  })
export const useSQLiteQuery_createTableTenkenhyoGazou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGazou.create.Table
  })
export const useSQLiteQuery_createTableTenkenhyoGazouTemp = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGazouTemp.create.Table
  })
export const useSQLiteQuery_createTableTenkenhyoGenkyou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGenkyou.create.Table
  })
export const useSQLiteQuery_createTableMBuzaiZairyou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MBuzaiZairyou.create.Table
  })
export const useSQLiteQuery_createTableMDamageShurui = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MDamageShurui.create.Table
  })
export const useSQLiteQuery_createTableMGenkyouShurui = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MGenkyouShurui.create.Table
  })
export const useSQLiteQuery_createTableMShindan = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MShindan.create.Table
  })
export const useSQLiteQuery_createTableMTenkenShokenTemplate = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MTenkenShokenTemplate.create.Table
  })
export const useSQLiteQuery_createTableMTenkenHanrei = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MTenkenHanrei.create.Table
  })
export const useSQLiteQuery_createTableMDamageShuruiTablet = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MDamageShuruiTablet.create.Table
  })
export const useSQLiteQuery_createTableMBuzaiTenkenhyo = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MBuzaiTenkenhyo.create.Table
  })

export const useSQLiteQuery_createTables = () => {
  useSQLiteQuery_createTableUser()
  useSQLiteQuery_createTableMGyoumu()
  useSQLiteQuery_createTableBridge()
  useSQLiteQuery_createTableTenkenRireki()
  useSQLiteQuery_createTableTenkenRirekiTemp()
  useSQLiteQuery_createTableBuzaiHyouka()
  useSQLiteQuery_createTableTenkenhyoGazou()
  useSQLiteQuery_createTableTenkenhyoGazouTemp()
  useSQLiteQuery_createTableTenkenhyoGenkyou()
  useSQLiteQuery_createTableMBuzaiZairyou()
  useSQLiteQuery_createTableMDamageShurui()
  useSQLiteQuery_createTableMGenkyouShurui()
  useSQLiteQuery_createTableMShindan()
  useSQLiteQuery_createTableMTenkenShokenTemplate()
  useSQLiteQuery_createTableMTenkenHanrei()
  useSQLiteQuery_createTableMDamageShuruiTablet()
  useSQLiteQuery_createTableMBuzaiTenkenhyo()
}

// delete tables ==============================================
export const useSQLiteQuery_deleteTableUser = () =>
  useSQLiteQuery({
    queryString: QueryStrings.LoginUser.delete.Table
  })
export const useSQLiteQuery_deleteTableMGyoumu = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MGyoumu.delete.Table
  })
export const useSQLiteQuery_deleteTableBridge = () =>
  useSQLiteQuery({
    queryString: QueryStrings.Bridge.delete.Table
  })
export const useSQLiteQuery_deleteTableTenkenRireki = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenRireki.delete.Table
  })
export const useSQLiteQuery_deleteTableTenkenRirekiTemp = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenRirekiTemp.delete.Table
  })
export const useSQLiteQuery_deleteTableBuzaiHyouka = () =>
  useSQLiteQuery({
    queryString: QueryStrings.BuzaiHyouka.delete.Table
  })
export const useSQLiteQuery_deleteTableTenkenhyoGazou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGazou.delete.Table
  })
export const useSQLiteQuery_deleteTableTenkenhyoGazouTemp = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGazouTemp.delete.Table
  })
export const useSQLiteQuery_deleteTableTenkenhyoGenkyou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.TenkenhyoGenkyou.delete.Table
  })
export const useSQLiteQuery_deleteTableMBuzaiZairyou = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MBuzaiZairyou.delete.Table
  })
export const useSQLiteQuery_deleteTableMDamageShurui = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MDamageShurui.delete.Table
  })
export const useSQLiteQuery_deleteTableMGenkyouShurui = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MGenkyouShurui.delete.Table
  })
export const useSQLiteQuery_deleteTableMShindan = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MShindan.delete.Table
  })
export const useSQLiteQuery_deleteTableMTenkenShokenTemplate = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MTenkenShokenTemplate.delete.Table
  })
export const useSQLiteQuery_deleteTableMTenkenHanrei = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MTenkenHanrei.delete.Table
  })
export const useSQLiteQuery_deleteTableMDamageShuruiTablet = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MDamageShuruiTablet.delete.Table
  })
export const useSQLiteQuery_deleteTableMBuzaiTenkenhyo = () =>
  useSQLiteQuery({
    queryString: QueryStrings.MBuzaiTenkenhyo.delete.Table
  })

// type: mutation
// input: {username, password}
// output: {isSuccess: boolean}
export const useSQLiteMutation_Login = ({ onSuccess = data => {} }) => {
  const { response, mutate: cMutaute } = useSQLiteMutation({
    queryString: QueryStrings.LoginUser.select.LoginID.by.LoginID_Password.pure,
    select: data => ({ isSuccess: !!data?.length }),
    onSuccess
  })

  const mutate = useCallback(({ username = '', password = '' }) => {
    const params = [username, password]

    cMutaute(params)
  })

  return { response, mutate }
}

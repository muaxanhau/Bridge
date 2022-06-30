import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
/* Theme variables */
import './theme/variables.css'

import AppProvider from './globalStates/AppProvider'
import { setupSQLite } from './utils/commons'
import { useImportCSV } from './utils/hooks'
import { Loader } from './components'
import { NamePages } from './constants'
import {
  Login,
  Menu,
  GyoumuDataKanri,
  TenkenGyoumuMap,
  MenuRouterTypeFlagCalvert1,
  MenuRouterTypeFlagCalvert2,
  Shashinchou,
  ShashinchouWithBarType1,
  Test
} from './pages'

setupIonicReact()

const App = () => {
  const { execute } = useImportCSV()

  useEffect(async () => {
    await setupSQLite()
    execute()
  }, [])

  return (
    <AppProvider>
      <Loader />

      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/'>
              <Redirect to={NamePages.Login} />
            </Route>
            <Route exact path={NamePages.Login}>
              <Login />
            </Route>
            <Route exact path={NamePages.Menu}>
              <Menu />
            </Route>
            <Route exact path={NamePages.GyoumuDataKanri}>
              <GyoumuDataKanri />
            </Route>
            <Route exact path={NamePages.TenkenGyoumuMap}>
              <TenkenGyoumuMap />
            </Route>
            <Route exact path={NamePages.MenuRouterTypeFlagCalvert1}>
              <MenuRouterTypeFlagCalvert1 />
            </Route>
            <Route exact path={NamePages.MenuRouterTypeFlagCalvert2}>
              <MenuRouterTypeFlagCalvert2 />
            </Route>
            <Route exact path={NamePages.Shashinchou}>
              <Shashinchou />
            </Route>
            <Route exact path={NamePages.ShashinchouWithBarType1}>
              <ShashinchouWithBarType1 />
            </Route>
            <Route exact path={NamePages.Test}>
              <Test />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AppProvider>
  )
}

export default App

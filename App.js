import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppStack from './src/routes'
import persist from "./src/config/Store";

const persistStore = persist();

const App = () => {
  return (
    <>
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
    </> 
  )
}

export default App

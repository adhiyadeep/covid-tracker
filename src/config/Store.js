import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import logger from 'redux-logger'


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk,logger))
  let persistor = persistStore(store)
  return { store, persistor }
}
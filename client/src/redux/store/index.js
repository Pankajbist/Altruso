import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import users from '../reducerSlice/users'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }
const reducer = combineReducers({
    users,
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:[logger]
})
export const persistor = persistStore(store)

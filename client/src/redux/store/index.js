import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import users from '../reducerSlice/users'
const reducer = combineReducers({
    users,
})
const store = configureStore({
    reducer,
    middleware:[logger]
})

export default store;
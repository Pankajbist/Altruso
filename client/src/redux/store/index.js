import { combineReducers, configureStore } from '@reduxjs/toolkit'

import users from '../reducerSlice/users'
const reducer = combineReducers({
    users,
})
const store = configureStore({
    reducer,
})

export default store;

import { configureStore } from '@reduxjs/toolkit';
import common from './commonSlice'
import auth from './userSlice'


const store = configureStore({
    reducer:{
        common: common,
        user: auth
    }
})

export default store;
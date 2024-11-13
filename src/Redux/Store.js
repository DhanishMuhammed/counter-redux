import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice/Counterslice'

export const store =configureStore({
    reducer:{
        counterReducer:counterSlice
    }
    
})
import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from './reducers/eventsReducers';

export const store = configureStore({
    reducer:{
        eventsReducer
    }
})
import { createReducer } from "@reduxjs/toolkit";
import { getEventsSync, getEventsAsync, getEventAsync } from "../actions/eventsActions";


const intialState = {
    events: [],
    loading: false,
    event: {}
}

const eventsReducer = createReducer(intialState,
    (builder) => builder
        .addCase(getEventsSync, (state, action) => {
            const newState = { ...state, events: action.payload }
            return newState
        })

        .addCase(getEventsAsync.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const newState = { ...state, events: action.payload, loading: false }
            return newState
        })
        .addCase(getEventsAsync.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getEventsAsync.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })

        .addCase(getEventAsync.fulfilled, (state, action) => {
            const newState = { ...state, event: action.payload, loading: false }
            return newState
        })
        .addCase(getEventAsync.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getEventAsync.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })
        .addDefaultCase(() => {
            return intialState
        })
)

export default eventsReducer
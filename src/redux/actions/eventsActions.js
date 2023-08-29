import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const getEventsSync = createAction('getEventsSync', (data) => {
    return {
        payload: 'algo'
    }
})

const getEventsAsync = createAsyncThunk('getEventsAsync', async () => {
    try {
        const res = await server.get('/events')
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})

const getEventAsync = createAsyncThunk('getEventAsync', async ({ id }) => {
    try {
        const res = await server.get('/events/' + id)
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})



export { getEventsSync, getEventsAsync, getEventAsync }
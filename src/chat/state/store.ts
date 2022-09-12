import { configureStore } from '@reduxjs/toolkit'
import messagesSlice from './messagesSlice';

export const store = configureStore({
    reducer: {
        messages: messagesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

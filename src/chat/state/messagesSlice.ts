import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '../model/Message';
import { initMockData, sendMessage } from '../api/messages.resource';

export const sendNewMessage = createAsyncThunk(
    'messages/sendNewMessage',
    async (message: Message, thunkAPI) => {
        thunkAPI.dispatch(fetching());

        return sendMessage(message)
            .then((data: Message[]) => {
                thunkAPI.dispatch(fetchSuccess(data));
            })
            .catch(() => {
                thunkAPI.dispatch(fetchError());
            });
    }
)

interface MessagesState {
    entities: Message[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
}

const initialState: MessagesState = {
    entities: initMockData,
    loading: 'idle',
    error: null,
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        fetching: (state) => {
            state.loading = 'pending';
        },
        fetchError: (state) => {
            state.loading = 'failed';
        },
        fetchSuccess: (state, action: PayloadAction<Message[]>) => {
            state.entities = action.payload;
            state.loading = 'succeeded';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendNewMessage.pending, (state, action) => {
        })
    },
})


// Action creators are generated for each case reducer function
export const {fetching, fetchSuccess, fetchError} = messagesSlice.actions

export default messagesSlice.reducer

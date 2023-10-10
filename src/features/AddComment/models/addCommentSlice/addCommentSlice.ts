import { type AddCommentSchema } from '../types/AddCommentSchema'
import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit/dist/createAction'

const initialState: AddCommentSchema = {
    isLoading: false,
    error: '',
    text: ''
}

const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText (state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    }
})

export const addCommentReducer = addCommentSlice.reducer
export const { setText } = addCommentSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from 'features/Profile/models/actions/fetchProfile'
import {  type ProfileSchema } from '../types/ProfileType'

export interface PasswordSchema  {
    password?: string
}
const initialState: PasswordSchema = {
    password: undefined
}

const PasswordSlice = createSlice({
    name: 'Password',
    initialState,
    reducers: {
       setPassword(state, action) {
        state = action.payload
       }
    },
   
})

export const profileReducer = PasswordSlice.reducer
export const  { setPassword } = PasswordSlice.actions
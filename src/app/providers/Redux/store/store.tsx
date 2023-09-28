import { configureStore } from '@reduxjs/toolkit'
import { reducerEmail } from 'entities/EmailUser'
import { reducerPassword } from 'entities/PasswordUser'
import { userReducer } from 'entities/User'

const Reducers = {
    email: reducerEmail,
    password: reducerPassword,
    user: userReducer
}
export const SetUpStore = () => {
    return configureStore({
        reducer: Reducers
    })
}

import { configureStore } from '@reduxjs/toolkit'
import { reducerEmail } from 'entities/EmailUser'
import { reducerPassword } from 'entities/PasswordUser'

const Reducers = {
    email: reducerEmail,
    password: reducerPassword
}
export const SetUpStore = () => {
    return configureStore({
        reducer: Reducers
    })
}

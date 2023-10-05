import { type UserScheme } from 'entities/User/models/type/UserSchema'
import { type AuthUserSchema } from 'features/ModelLogin/models/types/AuthUserSchema'
import { type PasswordSchema } from 'entities/Password/models/types/passwordT'
import { type EmailSchema } from 'entities/Email/models/types/emailSchema'
import { type AnyAction, type CombinedState, EnhancedStore, type Reducer, ReducersMapObject } from '@reduxjs/toolkit'

export interface GlobalScheme {
    user: UserScheme
    auth: AuthUserSchema
    password: PasswordSchema
    email: EmailSchema
}

export type GlobalSchemaKeys = keyof GlobalScheme

interface ReduxManagerInterface {
    getReducerMap: () => Reducer[]
    reduce: (state: CombinedState<GlobalScheme>, action: AnyAction) => CombinedState<GlobalScheme>
    add: (key: GlobalSchemaKeys, reducer: Reducer) => void
    remove: (key: GlobalSchemaKeys) => void
}

export interface ReducerManager {
    reducerManager?: ReduxManagerInterface
}

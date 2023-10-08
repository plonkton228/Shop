import { type UserScheme } from 'entities/User/models/type/UserSchema'
import { type AuthUserSchema } from 'features/ModelLogin/models/types/AuthUserSchema'
import { type PasswordSchema } from 'entities/Password/models/types/passwordT'
import { type EmailSchema } from 'entities/Email/models/types/emailSchema'
import { type AnyAction, type CombinedState, type Reducer } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'features/Profile/models/types/ProfileType'
import { type GoodSchema } from 'entities/Good'

export interface GlobalScheme {
    user: UserScheme
    auth: AuthUserSchema
    password: PasswordSchema
    email: EmailSchema
    profile: ProfileSchema
    goods: GoodSchema
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

export interface ThunkExtraArg {
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: GlobalScheme
}

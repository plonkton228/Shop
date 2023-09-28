import { type PasswordScheme } from 'entities/PasswordUser/models/type/PasswordScheme'

export const getPassword = (state: PasswordScheme): string => state.password

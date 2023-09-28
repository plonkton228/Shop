import { type EmailSchema } from 'entities/EmailUser/models/type/EmailUserType'

export const getEmail = (state: EmailSchema): string => state.email

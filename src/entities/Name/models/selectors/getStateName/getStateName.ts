import { PasswordSchema } from 'entities/Password/models/types/passwordT'
import { type GlobalScheme } from 'app/providers/Redux/models/types/ReduxType'

export const getStateName = (state: GlobalScheme) => state.name

import { type GlobalScheme } from 'app/providers/Redux/models/types/ReduxType'

export const getReadOnly = (state: GlobalScheme) => state.profile?.readonly

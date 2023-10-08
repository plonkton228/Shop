import { createSelector } from '@reduxjs/toolkit'
import { getStateAuth } from '../getStateAuth/getStateAuth'
import { type AuthUserSchema } from 'features/ModelLogin/models/types/AuthUserSchema'
export const getErrorAuth = createSelector(getStateAuth, (state: AuthUserSchema) => state?.error)

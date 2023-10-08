import { createSelector } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'features/Profile/models/types/ProfileType'
import { getProfileState } from 'features/Profile/models/selectors/getProfileState/getProfileState'

export const getErrorProfile = createSelector(getProfileState, (state: ProfileSchema) => state?.errors)

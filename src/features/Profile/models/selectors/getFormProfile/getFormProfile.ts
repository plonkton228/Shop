import { createSelector } from '@reduxjs/toolkit'
import { getProfileState } from '../getProfileState/getProfileState'
import { type ProfileSchema } from '../../types/ProfileType'

export const getFormProfile = createSelector(getProfileState, (state: ProfileSchema) => state?.form)

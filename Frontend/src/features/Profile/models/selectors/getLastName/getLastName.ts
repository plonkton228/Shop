import { createSelector } from '@reduxjs/toolkit'
import { type Profile } from '../../types/ProfileType'
import { getFormProfile } from 'features/Profile'

export const getLastName = createSelector(getFormProfile, (state: Profile) => state?.lastname || '')

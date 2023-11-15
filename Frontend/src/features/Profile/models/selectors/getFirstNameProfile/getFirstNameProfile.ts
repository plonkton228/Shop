import { createSelector } from '@reduxjs/toolkit'
import { type Profile } from '../../types/ProfileType'
import { getFormProfile } from 'features/Profile'

export const getFirstNameProfile = createSelector(getFormProfile, (state: Profile) => state?.first_name || '')
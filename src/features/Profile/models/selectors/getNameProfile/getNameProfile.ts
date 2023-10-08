import { createSelector } from '@reduxjs/toolkit'
import { type Profile } from '../../types/ProfileType'
import { getFormProfile } from '../getFormProfile/getFormProfile'

export const getNameProfile = createSelector(getFormProfile, (state: Profile) => state?.name || '')

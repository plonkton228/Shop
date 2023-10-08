import { ErrorsProfile, type Profile } from 'features/Profile/models/types/ProfileType'

export const validateError = (profile: Profile) => {
    const { name, lastname } = profile
    const errorsArray: ErrorsProfile[] = []
    if (!lastname) {
        console.log('work')
        errorsArray.push(ErrorsProfile.NO_USER_LASTNAME)
    }
    if (!name) {
        console.log('work')
        errorsArray.push(ErrorsProfile.NO_USER_NAME)
    }
    return errorsArray
}

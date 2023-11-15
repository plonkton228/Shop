import { ErrorsEmailUpdate } from '../types/ProfileType'

export const validateError = (email: string) => {
    const errorsArray: ErrorsEmailUpdate[] = []
    if (!email) {
        errorsArray.push(ErrorsEmailUpdate.NO_USER_EMAIL)
    }

    return errorsArray
}

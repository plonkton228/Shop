import { ErrorsPasswordUpdate } from '../types/ProfileType'

export const validateError = (email: string) => {
    const errorsArray: ErrorsPasswordUpdate[] = []
    if (!email) {
        errorsArray.push(ErrorsPasswordUpdate.WRONG_PASSWORD)
    }

    return errorsArray
}

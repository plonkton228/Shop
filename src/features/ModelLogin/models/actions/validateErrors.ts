import { ErrorsAuth, type UserInfo } from 'features/ModelLogin/models/types/AuthUserSchema'

export const validateErrors = (user: UserInfo) => {
    const errorsValidate: ErrorsAuth[] = []
    if (!user.email) {
        errorsValidate.push(ErrorsAuth.NO_USER_EMAIL)
    }
    if (!user.password) {
        errorsValidate.push(ErrorsAuth.NO_USER_PASSWORD)
    }

    return errorsValidate
}

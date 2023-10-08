export interface UserInfo {
    email: string
    password: string
}

export enum ErrorsAuth {
    ERROR_SERVER = 'ERROR_SERVER',
    NO_USER_PASSWORD = 'NO_USER_PASSWORD',
    NO_USER_EMAIL = 'NO_USER_EMAIL',
}

export interface AuthUserSchema {
    isLoading: boolean
    error?: ErrorsAuth[]
}

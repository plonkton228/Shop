export interface Profile {
    id?: string
    email?: string
    first_name?: string
}
export enum ErrorsEmailUpdate {
    ERROR_SERVER = 'ERROR_SERVER',
    NO_USER_EMAIL = 'NO_USER_EMAIL'
}
export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    errorsEmail: ErrorsEmailUpdate[]
    readonly: boolean
}

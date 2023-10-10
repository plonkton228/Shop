export interface Profile {
    id?: string
    name?: string
    lastname?: string
}
export enum ErrorsProfile {
    ERROR_SERVER = 'ERROR_SERVER',
    NO_USER_NAME = 'NO_USER_NAME',
    NO_USER_LASTNAME = 'NO_USER_LASTNAME'
}
export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    errors: ErrorsProfile[]
    readonly: boolean
}

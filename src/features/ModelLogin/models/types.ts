export interface User {
    email: string
    password: string
}

export interface AuthUserShcnema {
    email: string
    password: string
    isLoading: boolean
    error?: string
}
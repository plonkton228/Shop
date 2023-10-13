import { ErrorsComment } from '../types/CommentSchema'

export const validateErrors = (data: string) => {
    const errors: ErrorsComment[] = []
    if (!data || !(data.length > 4)) {
        errors.push(ErrorsComment.INCORRECT_DATA)
    }
    return errors
}

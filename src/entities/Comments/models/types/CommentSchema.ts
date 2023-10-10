import { type User } from 'entities/User/models/type/UserSchema'
import { type EntityState } from '@reduxjs/toolkit'

export interface comment {
    id: string
    user: User
    body: string
    goodsId?: string
    userId?: string
}

export interface CommentSchema extends EntityState<comment> {
    isLoading: boolean
    error: string
    comment?: comment[]
}

export interface typeForActionAddComment {
    goodsId: string
    userId: string
    text: string
}

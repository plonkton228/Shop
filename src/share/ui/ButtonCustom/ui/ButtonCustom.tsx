import { type ButtonHTMLAttributes } from 'react'
import { useClassName } from 'share/libs/useClassName/useClassName'
import cls from '../models/button.module.scss'

export enum ButtonCustomState {
    RESET = 'reset'
}

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    classes?: string
    state: ButtonCustomState
}
export const ButtonCustom: React.FC<ButtonCustomProps> = ({ children, classes, state, ...otherProps }: ButtonCustomProps) => {
    return (<>
        <button className={useClassName({ cls: cls.buttonC, mode: {}, classes: [cls[state]] })} {...otherProps}>
            {children}
        </button>
    </>)
}

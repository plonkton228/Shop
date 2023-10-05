import { memo } from 'react'
import { useClassName } from 'share/libs/useClassName/useClassName'
import cls from '../models/InputCustom.module.scss'

export enum InputState {
    MODALINPUT = 'modalInput'
}
interface InputCustomProps {
    onChange?: (e: string) => void
    value?: string
    children?: React.ReactNode
    classe?: string
    firstplace?: React.ReactNode
    secondplace?: React.ReactNode
    type?: string
    state: InputState
    placeholder?: string
}
export const InputCustom: React.FC<InputCustomProps> = memo(({ onChange, value, classe, children, firstplace, secondplace, state, type, placeholder }: InputCustomProps) => {
    return (<div className={useClassName({ cls: cls.ContainerInput, mode: {}, classes: [cls[state], classe] })}>
        <div className={cls.PlaceContainer}> {firstplace} <span>{secondplace}</span></div>
        <input placeholder={placeholder} type={type} className={ cls.InputCustom } value={value} onChange={(e) => { onChange(e.target.value) } } >{children}</input>
    </div>)
})

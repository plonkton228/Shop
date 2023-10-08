import { memo } from 'react'
import { useClassName } from 'share/libs/useClassName/useClassName'
import cls from '../models/InputCustom.module.scss'

export enum InputState {
    MODALINPUT = 'modalInput',
    RESETINPUT = 'resetInput'
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
    readonly?: boolean
}
export const InputCustom: React.FC<InputCustomProps> = memo(({ onChange, value, classe, children, firstplace, secondplace, state, type, placeholder, readonly }: InputCustomProps) => {
    return (<div className={cls.ContainerInput}>
        <div className={cls.PlaceContainer}> {firstplace} <span>{secondplace}</span></div>
        <input className={useClassName({ cls: cls.InputCustom, mode: {}, classes: [cls[state], classe] })} readOnly={readonly} placeholder={placeholder} type={type} value={value} onChange={(e) => { onChange(e.target.value) } } >{children}</input>
    </div>)
})

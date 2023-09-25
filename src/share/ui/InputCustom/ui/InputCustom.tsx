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
}
export const InputCustom: React.FC<InputCustomProps> = ({ onChange, value, classe, children, firstplace, secondplace, state, type }: InputCustomProps) => {
    return(<div className={useClassName({cls: cls.ContainerInput, mode: {}, classes: []})}>
        <div className={cls.PlaceContainer}> {firstplace} {secondplace}</div>
        <input type={type} className={useClassName({cls: cls.InputCustom, mode: {}, classes: [cls[state]]})} value={value} onChange={(e) => { onChange(e.target.value) } } >{children}</input>
    </div>)
}
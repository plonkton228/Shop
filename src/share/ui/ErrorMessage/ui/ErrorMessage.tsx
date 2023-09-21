import { useClassName } from 'share/libs/useClassName/useClassName'
import cls from '../models/styles/ErrorMessage.module.scss'
export const ErrorMessage: React.FC = () => {
    return (<>
        <div className= {useClassName({ cls: cls.container, mode: {}, classes: [] })}>
            <h1> Опс что-то пошло не так !</h1>
        </div>
    </>)
}

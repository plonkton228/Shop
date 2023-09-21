import { Routes, Route } from 'react-router-dom'
import { Store } from '../lib/Store'

export const Routing: React.FC = () => {
    return (<>
        <Routes>
            {
                Object.values(Store).map((element) => <Route key = {element.path} path = {element.path} element = {element.element}/>)
            }
        </Routes>
    </>)
}

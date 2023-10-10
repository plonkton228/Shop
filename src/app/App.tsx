import { Routing } from './providers/Routing/ui/Routing'
import './styles/index.scss'
import { NavBar } from 'widgets/NavBar'
import { useEffect } from 'react'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { reAuth } from 'entities/User'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(reAuth())
    }, [])
    return (<>
        <NavBar/>
        <Routing/>
    </>)
}
export default App

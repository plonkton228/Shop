import { Routing } from './providers/Routing/ui/Routing'
import './styles/index.scss'
import { NavBar } from 'widgets/NavBar'
const App: React.FC = () => {
    return (<>
        <NavBar/>
        <Routing/>
    </>)
}
export default App

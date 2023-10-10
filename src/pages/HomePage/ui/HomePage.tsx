import { Intro } from 'widgets/Intro/ui/Intro'
import { Goods } from 'widgets/Goods/ui/Goods'


const HomePage: React.FC = () => {

    return (<>
        <div>
            <Intro/>
            <Goods/>
        </div>
    </>)
}
export default HomePage

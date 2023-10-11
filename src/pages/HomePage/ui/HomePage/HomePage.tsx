import { Intro } from 'widgets/Intro/ui/Intro'
import { Goods } from 'widgets/Goods/ui/Goods'
import { GoodsHome } from 'pages/HomePage/ui/GoodsHome/GoodsHome'

const HomePage: React.FC = () => {

    return (<>
        <div>
            <Intro/>
            <Goods/>
            <GoodsHome/>
        </div>
    </>)
}
export default HomePage

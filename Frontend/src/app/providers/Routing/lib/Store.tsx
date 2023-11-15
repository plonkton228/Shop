import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { GoodsPage } from 'pages/GoodsPage'
import { DetailGoods } from 'entities/Good'
import { ProjectPage } from 'pages/ProjectPage'
import { Basket } from 'pages/Basket'
import { Payment } from 'pages/Payment'


export type AppRouteProps = RouteProps & {
    isAuth?: boolean
}

enum Routs {
    HOME = 'home',
    GOODS = 'goods',
    PROJECT = 'project',
    GOODS_DETAILS = 'goods_detail',
    BASKET = 'basket',
    PAYMENT = 'payment'
}

export const PathRouts: Record<Routs, string> = {
    [Routs.HOME]: '/',
    [Routs.GOODS]: '/goods',
    [Routs.PROJECT]: '/project',
    [Routs.GOODS_DETAILS]: '/goods/',
    [Routs.BASKET]: '/basket',
    [Routs.PAYMENT]: '/payment'
}

export const Store: Record<Routs, AppRouteProps> = {
    [Routs.HOME]: {
        path: PathRouts.home,
        element: <HomePage/>
    },
    [Routs.GOODS]: {
        path: PathRouts.goods,
        element: <GoodsPage/>,
        isAuth: true
    },

    [Routs.PROJECT]: {
        path: PathRouts.project,
        element: <ProjectPage/>
    },
    [Routs.GOODS_DETAILS]: {
        path: `${PathRouts.goods_detail}:id`,
        element: <DetailGoods/>,
        isAuth: true
    },
    [Routs.BASKET]: {
        path: `${PathRouts.basket}`,
        element: <Basket/>
    },
    [Routs.PAYMENT]: {
        path: `${PathRouts.payment}`,
        element: <Payment/>

    }

}

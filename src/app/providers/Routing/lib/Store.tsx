import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { GoodsPage } from 'pages/GoodsPage'
import { OptPage } from 'pages/OptPage'
import { ProjectPage } from 'pages/ProjectPage'
import { ConverterPage } from 'pages/ConverterPage'
import { DetailGoods } from 'entities/Good'
import { OptPageTest } from 'pages/OptPageTest'


export type AppRouteProps = RouteProps & {
    isAuth?: boolean
}

enum Routs {
    HOME = 'home',
    GOODS = 'goods',
    ABOUTUS = 'aboutus',
    OPT = 'opt',
    PROJECT = 'project',
    CONVERTER = 'converter',
    GOODS_DETAILS = 'goods_detail',
    TEST_DETAILS = 'test_details'
}

export const PathRouts: Record<Routs, string> = {
    [Routs.HOME]: '/',
    [Routs.ABOUTUS]: '/aboutus',
    [Routs.GOODS]: '/goods',
    [Routs.OPT]: '/opt',
    [Routs.PROJECT]: '/project',
    [Routs.CONVERTER]: '/converter',
    [Routs.GOODS_DETAILS]: '/goods/',
    [Routs.TEST_DETAILS]: '/opt/'
}

export const Store: Record<Routs, AppRouteProps> = {
    [Routs.HOME]: {
        path: PathRouts.home,
        element: <HomePage/>
    },
    [Routs.ABOUTUS]: {
        path: PathRouts.aboutus,
        element: <AboutPage/>
    },
    [Routs.GOODS]: {
        path: PathRouts.goods,
        element: <GoodsPage/>,
        isAuth: true
    },
    [Routs.OPT]: {
        path: PathRouts.opt,
        element: <OptPage/>
    },
    [Routs.PROJECT]: {
        path: PathRouts.project,
        element: <ProjectPage/>
    },
    [Routs.CONVERTER]: {
        path: PathRouts.converter,
        element: <ConverterPage/>,
        isAuth: true
    },
    [Routs.GOODS_DETAILS]: {
        path: `${PathRouts.goods_detail}:id`,
        element: <DetailGoods/>
    },
    [Routs.TEST_DETAILS]: {
        path: `${PathRouts.test_details}:id`,
        element: <OptPageTest/>
    }
}

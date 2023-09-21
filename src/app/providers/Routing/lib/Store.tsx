import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { GoodsPage } from 'pages/GoodsPage'
import { OptPage } from 'pages/OptPage'
import { ProjectPage } from 'pages/ProjectPage'
import { ConverterPage } from 'pages/ConverterPage'
import { BatariePage } from 'pages/BatariePage'
import { KonektorPage } from 'pages/KonektorPage'
import { KabelPage } from 'pages/KabelPage'
import { PanelPage } from 'pages/PanelPage'
import { MaterialPage } from 'pages/MaterialPage'

enum Routs {
    HOME = 'home',
    GOODS = 'goods',
    ABOUTUS = 'aboutus',
    OPT = 'opt',
    PROJECT = 'project',
    KONEKTOR = 'konektor',
    KABEL = 'kabel',
    PANEL = 'panel',
    CONVERTER = 'converter',
    BATARIE = 'batarie',
    MATERIAL = 'material'
}

export const PathRouts: Record<Routs, string> = {
    [Routs.HOME]: '/',
    [Routs.ABOUTUS]: '/aboutus',
    [Routs.GOODS]: '/goods',
    [Routs.OPT]: '/opt',
    [Routs.PROJECT]: '/project',
    [Routs.BATARIE]: '/batarie',
    [Routs.KONEKTOR]: '/konektor',
    [Routs.KABEL]: '/kabel',
    [Routs.PANEL]: '/panel',
    [Routs.CONVERTER]: '/converter',
    [Routs.MATERIAL]: '/material'
}

export const Store: Record<Routs, RouteProps> = {
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
        element: <GoodsPage/>
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
        element: <ConverterPage/>
    },
    [Routs.BATARIE]: {
        path: PathRouts.batarie,
        element: <BatariePage/>
    },
    [Routs.KONEKTOR]: {
        path: PathRouts.konektor,
        element: <KonektorPage/>
    },
    [Routs.KABEL]: {
        path: PathRouts.kabel,
        element: <KabelPage/>
    },
    [Routs.PANEL]: {
        path: PathRouts.panel,
        element: <PanelPage/>
    },
    [Routs.MATERIAL]: {
        path: PathRouts.material,
        element: <MaterialPage/>
    }
}

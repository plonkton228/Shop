export interface Parametrs {
    Ratedpower: string
    Voc: string
    Isc: string
    Vmp: string
    Imp: string
    Účinnost: string
    Tolerance: string
    Maximální: string
    Tlak: string
    Rozměr: string
    Tloušťka: string
    Weight: string
    Článek: string
    Propojovací: string
    Konektor: string
}

export interface Good {
    id: string
    name: string
    parameters: Parametrs
    price: string
}

export interface GoodSchema {
    good?: Good
    isLoading: boolean
    error: string
}

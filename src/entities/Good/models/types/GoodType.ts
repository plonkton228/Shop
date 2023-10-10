export interface CharacteristicGood {
    Ratedpower: string
    Voc: string
    Isc: string
    Vmp: string
    Imp: string
    Účinnost: string
    Tolerance: string
    Maximální: string
    Tlak: string
}

export interface StructureGood {
    Rozměr: string
    Tloušťka: string
    Weight: string
    Článek: string
    Propojovací: string
    Konektor: string
}
export interface Good {
    id: string
    model: string
    Characteristic: CharacteristicGood
    Structure: StructureGood
}

export interface GoodSchema {
    good?: Good
    isLoading: boolean
    error: string
}

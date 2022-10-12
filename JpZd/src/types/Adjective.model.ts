export interface AdjectiveStructure {
    jp: string,
    pl: string,
    rz: string,
    }

export default interface Adjective {
    [key: string]: Array<AdjectiveStructure>
}


export interface AdjectiveStructure {
    jp: string,
    pl: string,
    noun: string,
    }

export default interface Adjective {
    [key: string]: Array<AdjectiveStructure>
}


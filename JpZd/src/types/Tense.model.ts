export default interface Tense{
    past:string,
    present:string,
    future:string
}

export interface TenseSet{
    jp:Tense,
    pl:Tense
}

export interface TimeStructure{
    jp:string,
    pl:string,
    time?:string
}
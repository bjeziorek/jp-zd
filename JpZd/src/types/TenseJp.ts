
interface NegPos{
    positive:string,
    negative:string
}

interface Tense{
    past:NegPos,
    present:NegPos,
    future:NegPos,
}

export interface TenseJp{
    polite:Tense,
    simple:Tense
}
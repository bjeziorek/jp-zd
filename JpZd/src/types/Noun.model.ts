import { Case, CaseType } from './Case.model';

export interface Collocations {
    verb: string,
    meaning: string,
    particle: string,
    particlePl?:{particle:string,casePl:CaseType}
    tags?:Array<string>
}


export interface NounStructure {
    jp: string,
    pl: Case,
    counter: string,
    plGender: string,
    isAlive: boolean,
    isHuman: boolean,
    tags: Array<string>,
    collocations?: Array<Collocations>
}

export default interface Noun {
    [key: string]: Array<NounStructure>
}


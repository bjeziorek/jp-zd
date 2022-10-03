import { Case } from './Case.model';

interface Preposition {
    preposition: string,
    case: string
}

export interface JapaneseVerb {
    dictionaryForm: string
    particle: Array<string>
}

interface PolishVerb {
    infinitive: string
    isPerfective: boolean //dokonany
    isReflexive: boolean //zwrotny
    isNonReflexive: boolean 
    prepositions: Array<Preposition>
    rozkazujący?: string
    rozkazujący2os?: string
    imieslowNiedokonany?: string
    niedokonany?: string
    dokonany?: string
    os3?: string
}

export interface VerbStructure {
    jp: JapaneseVerb,
    pl: PolishVerb,
    tags: Array<string>,
}

export default interface Verb {
    [key: string]: Array<VerbStructure>
}


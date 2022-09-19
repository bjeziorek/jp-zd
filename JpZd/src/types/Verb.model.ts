import { Case } from './Case.model';

interface Preposition {
    preposition: string,
    case: string
}

interface JapaneseVerb {
    dictionaryForm: string
    particle: Array<string>
}

interface PolishVerb {
    inifinitive: string
    isPerfective: boolean //dokonany
    isReflexive: boolean //zwrotny
    isNonReflexive: boolean 
    prepositions: Array<Preposition>
    rozkazujący?: string
    imieslowNiedokonany?: string
    niedokonany?: string
    dokonany?: string
    os3?: string
}

interface VerbStructure {
    jp: JapaneseVerb,
    pl: PolishVerb,
    tags: Array<string>,
}

export default interface Verb {
    [key: string]: Array<VerbStructure>
}


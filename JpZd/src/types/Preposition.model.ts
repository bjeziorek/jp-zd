import { Case } from './Case.model';
import { plCasePool } from './../data/dictionary';

type Cases=typeof plCasePool

interface PrepositionPl{
    case: Case,
    preposition:string,
}

export interface PrepositionStructure{
    jp:string,
    pl:PrepositionPl
}

export default interface Preposition {
    [key: string]: Array<PrepositionStructure>
}


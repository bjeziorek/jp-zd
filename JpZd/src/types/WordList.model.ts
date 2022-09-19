import { Case } from './Case.model';

interface NounStructure {
    jp: string, 
    pl: Case, 
    counter:string,
    plGender: string, 
    isAlive: boolean, 
    isHuman: boolean,
    tags: Array<string>,
}

export default interface Noun{
    [key:string]:Array<NounStructure>      
}


import { Case } from './Case.model';

interface Theme {
    jp: string, 
    pl: Case, 
    counter:string,
    plGender: string, 
    isAlive: boolean, 
    isHuman: boolean,
}

export default interface WordList{
    [key:string]:Array<Theme>      
}


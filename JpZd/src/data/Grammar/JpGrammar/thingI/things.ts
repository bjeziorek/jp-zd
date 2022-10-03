import { NounStructure } from './../../../../types/WordList.model';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function things():NounStructure{
    return rand(pickTheme('items')) 
}
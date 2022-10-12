import { NounStructure } from '../../../../types/Noun.model';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function things():NounStructure{
    return rand(pickTheme('n','items')) 
}
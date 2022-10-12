import { VerbStructure } from './../../../../types/Verb.model';
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function actions():VerbStructure{
    return rand(pickTheme('v','actions'))
}
import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function notYet(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','languages'))
    return{
        romaji:who.jp+'-wa mada '+what.jp+'-o wakarimasen.',
        meaning:who.pl.M+' jeszcze nie rozumie '+ what.pl.D+'.'
    }
}
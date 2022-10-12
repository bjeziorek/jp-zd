import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function hurts(theme:Theme):DataType{
    const who:NounStructure = rand(pickTheme('n',theme))
    const what:NounStructure = rand(pickTheme('n','body'))
    return{
        romaji:who.jp+'-wa '+what.jp+'-ga itai desu',
        meaning:who.pl.B+' boli '+what.pl.M,
    }
}
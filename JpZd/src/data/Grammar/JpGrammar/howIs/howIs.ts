import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function howIs(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','items'))
    return{
        romaji:who.jp+'-no '+what.jp+'-wa donna '+what.jp+' desu-ka?',
        meaning:what.pl.M+' '+who.pl.D+' to jaki/a/e '+what.pl.M+'?'
    }
}
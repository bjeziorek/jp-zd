import { oVerbFilter } from './../../../../utils/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function usually(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','items'))
    const oVerb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa taitei '+what.jp+'-o '+oVerb.jp.dictionaryForm,
        meaning:who.pl.M+' zwykle '+ oVerb.pl.os3 +' '+what.pl.B
    }
}
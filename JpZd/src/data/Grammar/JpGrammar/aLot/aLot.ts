import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { oVerbFilter } from '../../../../utils/oVerbFilter';

export function aLot(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n', 'items'))
    const oVerb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa takusan '+what.jp+'-o '+oVerb.jp.dictionaryForm,
        meaning:who.pl.M+' '+ oVerb.pl.os3 +' dużo '+what.pl.B
    }
}
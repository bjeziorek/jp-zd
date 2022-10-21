import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';

export function already(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n', theme))
    const what:NounStructure=rand(pickTheme('n', 'items'))
    const oVerb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa mou '+what.jp+'-o '+verbFormJp(oVerb.jp.dictionaryForm,jpVerbFormsPool.mashita),
        meaning:who.pl.M+' już '+ oVerb.pl.os3 +'-ł '+what.pl.B
    }
}
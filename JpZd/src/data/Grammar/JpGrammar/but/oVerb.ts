import { oVerbFilter } from './../../../../utils/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function oVerb(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what1:NounStructure=rand(pickTheme('n','items'))
    const what2:NounStructure=rand(pickTheme('n','items'))
    const verb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa '+what1.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+what2.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who.pl.M+' '+verb.pl.os3+' '+what1.pl.D+', ale nie '+verb.pl.os3+' '+what2.pl.D
    }
}
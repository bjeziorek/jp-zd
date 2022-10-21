import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { jpVerbFormsPool, verbFormJp } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { NounStructure } from "../../../../types/Noun.model";
import { VerbStructure } from "../../../../types/Verb.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function afterVerb(theme:Theme):DataType{
    const what1:NounStructure = rand(pickTheme('n','languages'))
    const who:NounStructure=rand(pickTheme('n','professions'))
    const what2:NounStructure=rand(pickTheme('n',theme))
    const verb2:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    const verb1:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa '+what1.jp+'-o '+verbFormJp(verb1.jp.dictionaryForm,jpVerbFormsPool.ta)+' ato, '+what2.jp+'-o '+verb2.jp.dictionaryForm,
        meaning:who.pl.M+' po [tym jak] '+verb1.pl.os3+' '+what1.pl.Msc+', '+verb2.pl.os3+' '+what2.pl.D
    }

}
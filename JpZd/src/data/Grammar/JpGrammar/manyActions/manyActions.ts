import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { TimeStructure } from './../../../../types/Tense.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from './../../../../types/Theme.model';
import { verbFormJp } from '../../../dictionary';
export function manyActions(theme:Theme):DataType{
    const t:TimeStructure= rand(pickTheme('t',['present','future']))
    const n1:NounStructure= rand(pickTheme('n',['items']))
    const n2:NounStructure= rand(pickTheme('n',['items']))
    const who:NounStructure= rand(pickTheme('n',theme))
    const v1:VerbStructure= rand(pickTheme('v','actions').filter(oVerbFilter))
    const v2:VerbStructure= rand(pickTheme('v','actions').filter(oVerbFilter).filter((el:VerbStructure)=>{return el!==v1}))

    return{
        romaji:who.jp+'-wa '+t.jp+'-wa '+n1.jp+'-o '+verbFormJp(v1.jp.dictionaryForm,'ta')+'-ri '+n2.jp+'-o '+verbFormJp(v2.jp.dictionaryForm,'ta')+'-ri shimasu.',
        meaning:t.pl+' '+who.pl.M+' między innymi '+v1.pl.os3+' '+n1.pl.B+' [i] '+v2.pl.os3+' '+n2.pl.B
    }
}
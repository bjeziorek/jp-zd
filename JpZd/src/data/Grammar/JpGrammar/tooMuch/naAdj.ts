import { naAdjFilter } from './../../../../utils/filters/naAdjFilter';
import { jpVerbFormsPool, verbFormJp } from './../../../dictionary';
import { NounStructure } from './../../../../types/Noun.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from './../../../../types/Theme.model';
export function naAdj(theme:Theme):DataType{
    
    const adj:AdjectiveStructure=rand(pickTheme('a','all').filter(naAdjFilter))
    const n:NounStructure=rand(pickTheme('n','items'))
    const v: VerbStructure=rand(pickTheme('v','actions'))

    return{
        romaji:'Kono ' +n.jp+'-wa '+adj.jp.replace(/na$/,'-sugite')+', '+verbFormJp(verbFormJp(v.jp.dictionaryForm,jpVerbFormsPool.eru),jpVerbFormsPool.masen) +'.',
        meaning:'Nie mogę '+v.pl.infinitive+' tego/tej '+n.pl.D+' [ponieważ] jest zbyt '+adj.pl+'.'
    }
}
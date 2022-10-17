import { Time } from './../../../../types/Time.model';
import { jpVerbFormsPool } from './../../../dictionary';
import { NounStructure } from './../../../../types/Noun.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { oVerbFilter } from './../../../../utils/oVerbFilter';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from './../../../../types/Theme.model';
import { verbFormJp } from '../../../dictionary';
export function verb(theme:Theme):DataType{
    
    const who:NounStructure=rand(pickTheme('n',theme))
    const past:Time = rand(pickTheme('t','past'))
    const v:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    const n:NounStructure=rand(pickTheme('n','items'))

    return{
        romaji:past.jp+', '+who.jp+'-wa '+n.jp+'-o '+verbFormJp(v.jp.dictionaryForm,jpVerbFormsPool.masuBase)+'-'+verbFormJp('sugiru',jpVerbFormsPool.mashita),
        meaning:past.pl+' '+who.pl.M+' '+ v.pl.os3+'ł za dużo '+n.pl.D
    }
}
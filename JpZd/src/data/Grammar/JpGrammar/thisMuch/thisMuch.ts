import { VerbStructure } from './../../../../types/Verb.model';
import { TimeStructure } from './../../../../types/Tense.model';
import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
import { time, verbFormJp } from '../../../dictionary';
export function thisMuch(theme:Theme):DataType{
    const h=Math.ceil(Math.random()*12)
    const t:TimeStructure=time.past[Math.floor(Math.random()*time.past.length)]
    const verb:VerbStructure=rand(pickTheme('v',['move','actions']))
    return{
        romaji:t.jp+' '+h+' jikan-mo '+verbFormJp(verb.jp.dictionaryForm,'mashita')+'.',
        meaning:t.pl+' aż przez '+h+' godzin '+verb.pl.os3+'łem .'
    }
}
import { VerbStructure } from './../../../../types/Verb.model';
import { TimeStructure } from './../../../../types/Tense.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
import { time, verbFormJp } from '../../../dictionary';
export function onlyThatLittle(theme:Theme):DataType{
    const h=Math.ceil(Math.random()*12)
    const t:TimeStructure=time.past[Math.floor(Math.random()*time.past.length)]
    const verb:VerbStructure=rand(pickTheme('v',['move','actions']))
    return{
        romaji:t.jp+' '+h+' jikan-shika '+verbFormJp(verb.jp.dictionaryForm,'mashita')+'.',
        meaning:t.pl+' tylko przez '+h+' godzin '+verb.pl.os3+'łem .'
    }
}
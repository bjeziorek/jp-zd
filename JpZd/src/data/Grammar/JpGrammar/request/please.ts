import { Theme } from './../../../../types/Theme.model';
import { verbFormJp, jpVerbFormsPool } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function please(theme:Theme):DataType{
    
    const verb=rand(pickTheme('v','actions'))
    const r=Math.random()
    const v={
        jp:r>0.5?verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.naide)+' kudasai':verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.te)+' kudasai',
        pl:'Proszę '+(r>0.5?'nie ':'')+verb.pl.infinitive,
        
    }

    return{
        romaji:v.jp,
        meaning:v.pl
    }
}
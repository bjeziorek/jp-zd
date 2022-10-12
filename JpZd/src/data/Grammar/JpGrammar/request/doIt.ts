import { VerbStructure } from './../../../../types/Verb.model';
import { Theme } from './../../../../types/Theme.model';
import { verbFormJp, jpVerbFormsPool } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function doIt(theme:Theme):DataType{
    
    const verb:VerbStructure=rand(pickTheme('v','actions'))

    const r=Math.random()
    const v={
        jp:r>0.5?verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.naide)+'!':verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.te)+'!',
        pl:(r>0.5?'Nie ':'')+verb.pl.infinitive+'!',
        
    }

    return{
        romaji:v.jp,
        meaning:v.pl
    }
}
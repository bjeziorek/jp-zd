import { verbFormJp, verbs, jpVerbFormsPool } from './../../../../dictionary';
import DataType from "../../../../../types/DataType.model";
import rand from "../../../../../utils/randomArrayElement";

export function please(theme:string):DataType{
    
    const verb=rand(verbs.actions)
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
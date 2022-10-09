import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function oVerb(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const what1:NounStructure=rand(pickTheme('items'))
    const what2:NounStructure=rand(pickTheme('items'))
    const verb:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa '+what1.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+what2.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who.pl.M+' '+verb.pl.os3+' '+what1.pl.D+', ale nie '+verb.pl.os3+' '+what2.pl.D
    }
}
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function already(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const what:NounStructure=rand(pickTheme('items'))
    const oVerb:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa mou '+what.jp+'-o '+verbFormJp(oVerb.jp.dictionaryForm,jpVerbFormsPool.mashita),
        meaning:who.pl.M+' już '+ oVerb.pl.os3 +'-ł '+what.pl.B
    }
}
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function before(theme:string):DataType{

    const who:NounStructure=rand(pickTheme(theme))
    const item1:NounStructure=rand(pickTheme('items'))
    const item2:NounStructure=rand(pickTheme('items'))
    const oVerb1:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    const oVerb2:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa '+item1.jp+'-o '+oVerb1.jp.dictionaryForm+' mae-ni, '+item2.jp+'-o '+verbFormJp(oVerb2.jp.dictionaryForm,jpVerbFormsPool.masu),
        meaning:who.pl.M+' przed (zanim) '+oVerb1.pl.os3+' '+item1.pl.B+', '+oVerb2.pl.os3+' '+item2.pl.B
    }
}
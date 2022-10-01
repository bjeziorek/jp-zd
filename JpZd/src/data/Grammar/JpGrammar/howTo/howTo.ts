import { jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp, verbs } from "../../../dictionary";

export function howTo(theme:string):DataType{
    const verb=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    console.log(verbs.actions,verbs.actions.filter(el=>{return el.jp.particle.includes('o')}),verb)
    return{
        romaji:'Dou yatte kore-o '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ka?',
        meaning:'Jak to się '+verb.pl.os3
    }
}
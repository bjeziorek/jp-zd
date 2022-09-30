import { nouns, nounsKeyMatrix, verbs, verbsKeyMatrix } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function or(theme:string):DataType{
    const week=rand(pickTheme('week'))
    const who=rand(pickTheme(theme)) 
    const item=rand(pickTheme('items'))
    const verb=rand(verbs.actions.filter((el)=>{return el.jp.particle.includes('o')}))
    const hNumber1=Math.ceil( Math.random()*12).toString()
    const hNumber2=Math.ceil( Math.random()*12).toString()

    return{
        romaji:week.jp+'-ni '+who.jp+'-wa '+hNumber1+' jikan-ka '+hNumber2+' jikan '+item.jp+'-o '+verb.jp.dictionaryForm,
        meaning:'W '+week.pl.B+' '+who.pl.M+' '+verb.pl.os3+' '+item.pl.B+' przez '+hNumber1+' albo '+hNumber2+' godziny'
    }
}
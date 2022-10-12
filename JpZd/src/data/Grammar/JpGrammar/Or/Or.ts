import { oVerbFilter } from './../../../../utils/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function or(theme:Theme):DataType{
    const week:NounStructure=rand(pickTheme('n','week'))
    const who:NounStructure=rand(pickTheme('n',theme)) 
    const item:NounStructure=rand(pickTheme('n','items'))
    const verb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    const hNumber1=Math.ceil( Math.random()*12).toString()
    const hNumber2=Math.ceil( Math.random()*12).toString()

    return{
        romaji:week.jp+'-ni '+who.jp+'-wa '+hNumber1+' jikan-ka '+hNumber2+' jikan '+item.jp+'-o '+verb.jp.dictionaryForm,
        meaning:'W '+week.pl.B+' '+who.pl.M+' '+verb.pl.os3+' '+item.pl.B+' przez '+hNumber1+' albo '+hNumber2+' godziny'
    }
}
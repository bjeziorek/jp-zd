import { verbs } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function forAMoment(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const what:NounStructure=rand(pickTheme('languages'))
    const oVerb:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa sugu '+what.jp+'-o '+oVerb.jp.dictionaryForm,
        meaning:who.pl.M+' za chwilę będzie '+oVerb.pl.infinitive+' '+ what.pl.B+'.'
    }
}
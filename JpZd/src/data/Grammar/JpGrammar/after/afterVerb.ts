import { jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { NounStructure } from "../../../../types/Noun.model";
import { VerbStructure } from "../../../../types/Verb.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp, verbs } from "../../../dictionary";

export function afterVerb(theme:string):DataType{
    const what1:NounStructure = rand(pickTheme('languages'))
    const who:NounStructure=rand(pickTheme('professions'))
    const what2:NounStructure=rand(pickTheme(theme))
    const verb2:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    const verb1:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa '+what1.jp+'-o '+verbFormJp(verb1.jp.dictionaryForm,jpVerbFormsPool.ta)+' ato, '+what2.jp+'-o '+verb2.jp.dictionaryForm,
        meaning:who.pl.M+' po [tym jak] '+verb1.pl.os3+' '+what1.pl.Msc+', '+verb2.pl.os3+' '+what2.pl.D
    }

}
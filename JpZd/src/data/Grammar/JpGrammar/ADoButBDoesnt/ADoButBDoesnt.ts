import { verbFormJp, nouns, jpVerbFormsPool } from './../../../dictionary';
import { verbs } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function ADoButBDoesnt(theme:string):DataType{
    const filteredVerbs=verbs.actions.filter(el=>el.jp.particle.includes('o'))
    const verb1 = rand(filteredVerbs)
    const item = rand(nouns.items)
    const item2 = rand(nouns.items)
    const who1 = rand(pickTheme(theme))
    
    return{
        romaji:who1.jp+'-wa '+item.jp+'-wa '+verbFormJp( verb1.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+item2.jp+'-wa '+verbFormJp( verb1.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who1.pl.M+' '+verb1.pl.os3 +' '+item.pl.B+', ale nie '+verb1.pl.os3+' '+item2.pl.D
    }
}
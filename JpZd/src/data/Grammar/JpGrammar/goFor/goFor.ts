import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function goFor(theme:string):DataType{
    const verb:VerbStructure=rand(verbs.actions)
    const move:VerbStructure=rand(verbs.move)
    const who:NounStructure=rand(pickTheme(theme))
    return{
        romaji:who.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masuBase)+'-ni '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu),
        meaning:who.pl.M+' '+move.pl.os3+' '+verb.pl.infinitive
    }
}
import { jpVerbFormsPool } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import { Time } from '../../../../types/Time.model';
import { NounStructure } from '../../../../types/Noun.model';
import { adjectives, verbs,time, verbFormJp } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function when(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const when1:Time=rand(time.present)
    const when2:Time=rand(time.future)
    const verb:VerbStructure=rand(verbs.actions)
    return{
        romaji:who.jp+'-wa '+when1.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+when2.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who.pl.M+' '+when1.pl+' '+verb.pl.os3+', ale '+when2.pl+' nie '+verb.pl.os3
    }
}
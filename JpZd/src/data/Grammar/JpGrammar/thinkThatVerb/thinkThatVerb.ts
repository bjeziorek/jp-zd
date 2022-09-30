import { jpVerbFormsPool, verbFormJp, verbs } from './../../../dictionary';
import { nouns,time} from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function thinkThatVerb(theme:string):DataType{
    const when = rand(time.future)
    const verb=rand(verbs.actions)
    const who = rand(pickTheme(theme))
           
    return{
        romaji:who.jp+'-wa '+when.jp+' '+verb.jp.dictionaryForm+'-to omoimasu',
        meaning:'Myślę, że '+when.pl+' '+who.pl.M+' będzie '+verb.pl.infinitive+' '
        }
}
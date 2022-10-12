import { Theme } from './../../../../types/Theme.model';
import { jpVerbFormsPool } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import { Time } from '../../../../types/Time.model';
import { NounStructure } from '../../../../types/Noun.model';
import { verbFormJp } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function when(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const when1:Time=rand(pickTheme( 't','present'))
    const when2:Time=rand(pickTheme('t', 'future'))
    const verb:VerbStructure=rand(pickTheme('v','actions'))
    return{
        romaji:who.jp+'-wa '+when1.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+when2.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who.pl.M+' '+when1.pl+' '+verb.pl.os3+', ale '+when2.pl+' nie '+verb.pl.os3
    }
}
import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbFormJp, jpVerbFormsPool } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function goFor(theme:Theme):DataType{
    const verb:VerbStructure=rand(pickTheme('v','actions'))
    const move:VerbStructure=rand(pickTheme('v','move'))
    const who:NounStructure=rand(pickTheme('n',theme))
    return{
        romaji:who.jp+'-wa '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masuBase)+'-ni '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu),
        meaning:who.pl.M+' '+move.pl.os3+' '+verb.pl.infinitive
    }
}
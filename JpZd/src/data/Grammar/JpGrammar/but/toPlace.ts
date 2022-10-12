import { Theme } from './../../../../types/Theme.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function toPlace(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const place1:NounStructure=rand(pickTheme('n','places'))
    const place2:NounStructure=rand(pickTheme('n','places'))
    const move:VerbStructure=rand(verbs.move)
    return{
        romaji:who.jp+'-wa '+place1.jp+'-e-wa '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+place2.jp+'-e-wa '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who.pl.M+' '+move.pl.os3+' do '+place1.pl.D+', ale nie '+move.pl.os3+' do '+place2.pl.D}
}
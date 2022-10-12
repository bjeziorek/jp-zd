import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function thinkThatVerb(theme:Theme):DataType{
    const when = rand(pickTheme('t','future'))
    const verb=rand(pickTheme('v','actions'))
    const who = rand(pickTheme('n',theme))
           
    return{
        romaji:who.jp+'-wa '+when.jp+' '+verb.jp.dictionaryForm+'-to omoimasu',
        meaning:'Myślę, że '+when.pl+' '+who.pl.M+' będzie '+verb.pl.infinitive+' '
        }
}
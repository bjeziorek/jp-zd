import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { Theme } from "../../../../types/Theme.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp } from '../../../dictionary';

export function beAble(theme:Theme):DataType{

    const noun:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v',['actions','move']))

    return{
        romaji:noun.jp+'-wa '+verbFormJp( verb.jp.dictionaryForm,'eru'),
        meaning:noun.pl.M+' jest w stanie '+verb.pl.infinitive
    }
}
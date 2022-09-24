import { verbs } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';

export function assuranceVerb(theme:string):DataType{
    const verb=rand(verbs.actions)
    return {
        romaji:verb.jp.dictionaryForm+' wazu desu',
        meaning:'Na pewno będzie '+verb.pl.infinitive
    }
}
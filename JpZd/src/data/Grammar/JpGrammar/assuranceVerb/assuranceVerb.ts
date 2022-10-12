import { VerbStructure } from './../../../../types/Verb.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function assuranceVerb(theme:Theme):DataType{
    const verb:VerbStructure=rand(pickTheme('v','actions'))
    return {
        romaji:verb.jp.dictionaryForm+' wazu desu',
        meaning:'Na pewno będzie '+verb.pl.infinitive
    }
}
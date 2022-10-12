import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function whichTime(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v','move'))

    return {
        romaji:'Donna toki '+who.jp+'-wa '+verb.jp.dictionaryForm+'-ka.',
        meaning:'W jakim czasie '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
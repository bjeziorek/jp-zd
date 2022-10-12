import { Theme } from './../../../../types/Theme.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function whichAdj(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const adj:AdjectiveStructure=rand( pickTheme('a', 'all'))
    const verb:VerbStructure=rand(pickTheme('v','move'))

    return {
        romaji:adj.jp+' toki '+who.jp+'-wa '+verb.jp.dictionaryForm+'.',
        meaning:'W czasie, gdy '+who.pl.M+' jest '+adj.pl+' '+ verb.pl.os3+'.'
    }
}
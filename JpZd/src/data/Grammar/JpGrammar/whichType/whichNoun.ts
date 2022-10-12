import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function whichNoun(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','events'))
    const verb:VerbStructure=rand(pickTheme('v','move'))

    return {
        romaji:what.jp+'-no toki '+who.jp+'-wa donna tokoro-e '+verb.jp.dictionaryForm+'-ka.',
        meaning:'W czasie '+what.pl.D+' w jaki rodzaj miejsca '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function whichPlace(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v','move'))

    return {
        romaji:'Donna tokoro-e '+who.jp+'-wa '+verb.jp.dictionaryForm+'-ka.',
        meaning:'W jakiego rodzaju miejsce '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
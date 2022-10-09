import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { verbs } from '../../../dictionary';

export function whichNoun(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const what:NounStructure=rand(pickTheme('events'))
    const verb:VerbStructure=rand(verbs.move)

    return {
        romaji:what.jp+'-no toki '+who.jp+'-wa donna tokoro-e '+verb.jp.dictionaryForm+'-ka.',
        meaning:'W czasie '+what.pl.D+' gdzie '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
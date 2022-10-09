import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { verbs } from '../../../dictionary';

export function whichTime(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const verb:VerbStructure=rand(verbs.actions)

    return {
        romaji:'Donna toki '+who.jp+'-wa '+verb.jp.dictionaryForm+'-ka.',
        meaning:'W jakim czasie '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
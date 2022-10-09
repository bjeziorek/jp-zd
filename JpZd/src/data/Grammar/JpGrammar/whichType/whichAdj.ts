import { adjectives } from './../../../dictionary';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { verbs } from '../../../dictionary';

export function whichAdj(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const adj:AdjectiveStructure=rand(adjectives)
    const verb:VerbStructure=rand(verbs.move)

    return {
        romaji:adj.jp+' toki '+who.jp+'-wa '+verb.jp.dictionaryForm+'.',
        meaning:'W czasie, gdy '+who.pl.M+' jest '+adj.pl+' '+ verb.pl.os3+'.'
    }
}
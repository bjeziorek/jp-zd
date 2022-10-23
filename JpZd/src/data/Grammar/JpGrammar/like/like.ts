import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { likeNoun } from './likeNoun';
import { likeVerb } from './likeVerb';
export function like(theme:Theme):DataType{
    const question:DataType=rand([likeNoun(theme),likeVerb(theme)])
    return{
        romaji:question.romaji,
        meaning:question.meaning
    }
}
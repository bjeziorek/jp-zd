import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function assuranceNoun(theme:string):DataType{
    const noun=rand(pickTheme(theme))
    return {
        romaji:noun.jp+'-no wazu desu',
        meaning:'Na pewno jest '+noun.pl.N
    }
}
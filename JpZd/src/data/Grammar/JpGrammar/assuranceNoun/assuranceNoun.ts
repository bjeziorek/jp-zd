import { Theme } from './../../../../types/Theme.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';

export function assuranceNoun(theme:Theme):DataType{
    const noun=rand(pickTheme('n',theme))
    return {
        romaji:noun.jp+'-no wazu desu',
        meaning:'Na pewno jest '+noun.pl.N
    }
}
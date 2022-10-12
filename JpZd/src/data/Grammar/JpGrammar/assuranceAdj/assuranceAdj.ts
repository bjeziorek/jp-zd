import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function assuranceAdj(theme:Theme):DataType{
    const adj=rand(pickTheme('a','all'))
    return {
        romaji:adj.jp+' wazu desu',
        meaning:'Na pewno będzie '+adj.pl
    }
}
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { NounStructure } from './../../../../types/Noun.model';
import { naAdjFilter } from './../../../../utils/filters/naAdjFilter';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function thinkThatNaAdj(theme:Theme):DataType{
    const what:NounStructure = rand(pickTheme('n','items'))
    const naAdj:AdjectiveStructure = rand(pickTheme('a','all').filter(naAdjFilter))

    return{
        romaji:what.jp+' '+naAdj.jp.replace(/na$/,'')+'-da to omoimasu',
        meaning:'Myślę, że '+what.pl.M+' jest '+naAdj.pl
   }
}
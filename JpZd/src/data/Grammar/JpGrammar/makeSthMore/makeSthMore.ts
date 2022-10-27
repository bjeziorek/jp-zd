import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function makeSthMore(theme:Theme):DataType{
    const what:NounStructure=rand(pickTheme('n',['notMaterial','items']))
    const adj:NounStructure=rand(pickTheme('a','all').filter(iAdjFilter))
    return{
        romaji:what.jp+'-o motto '+adj.jp.replace(/i$/,'ku')+' shite kudasai.',
        meaning:'Zrób proszę '+what.pl.B+' bardziej '+adj.pl+'.'
    }
}
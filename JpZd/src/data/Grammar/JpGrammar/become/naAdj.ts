import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { Theme } from './../../../../types/Theme.model';
import { naAdjFilter } from './../../../../utils/filters/naAdjFilter';
import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';

export function naAdj(theme:Theme):{jp:string,pl:string}{
    const adj:AdjectiveStructure = rand(pickTheme('a','all').filter(naAdjFilter))
    return{
        jp:adj.jp.replace(/na$/,'-ni'),
        pl:adj.pl
    }
}
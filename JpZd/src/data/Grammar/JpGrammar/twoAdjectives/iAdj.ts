import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { Theme } from './../../../../types/Theme.model';
import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';

export function iAdj(theme:Theme):{jp:string,pl:string}{
    const adj:AdjectiveStructure = rand(pickTheme('a','all').filter(iAdjFilter))
    return{
        jp:adj.jp.replace(/i$/,'ku-te'),
        pl:adj.pl
    }
}
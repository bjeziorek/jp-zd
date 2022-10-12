import { Theme } from './../../../../types/Theme.model';
import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';

export default function adjective(theme:Theme){
    return(()=>{
        const adjective:AdjectiveStructure=rand(pickTheme('a','all').filter(iAdjFilter))
        return{
            jp:adjective.jp.replace(/i$/,'kunakute-mo ii desu'),
            pl:'Nie musi być '+adjective.pl
        }
    })()
}
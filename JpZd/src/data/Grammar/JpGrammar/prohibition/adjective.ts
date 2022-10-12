import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { Theme } from './../../../../types/Theme.model';
import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';

export default function adjective(theme:Theme){
    return(()=>{
        const adjective=rand(pickTheme('a','all').filter(iAdjFilter))
        return{
            jp:adjective.jp.replace(/i$/,'kute-wa ikemasen'),
            pl:'Nie może być '+adjective.pl
        }
    })()
}
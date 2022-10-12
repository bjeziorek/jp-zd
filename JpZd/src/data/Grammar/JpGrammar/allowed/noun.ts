import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export default function noun(theme:Theme){
    return(()=>{
        const noun:NounStructure = rand(pickTheme('n',theme))
        return{
            jp:noun.jp+'-de-mo ii desu',
            pl:'Może być '+noun.pl.M
        }
    })()
}
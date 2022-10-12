import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from '../../../../types/Noun.model';
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export default function noun(theme:Theme){
    return(()=>{
        const noun:NounStructure=rand(pickTheme('n',theme))
        return{
            jp:noun.jp+'-de-nakute-mo ii desu',
            pl:'Nie musu być '+noun.pl.N
        }
    })()
}
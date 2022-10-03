import { NounStructure } from '../../../../types/Noun.model';
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export default function noun(theme:string){
    return(()=>{
        const noun:NounStructure=rand(pickTheme(theme))
        return{
            jp:noun.jp+'-de-wa ikemasen',
            pl:'Nie może być '+noun.pl.M
        }
    })()
}
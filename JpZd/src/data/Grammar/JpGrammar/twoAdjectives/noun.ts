import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function noun(theme:Theme):{jp:string,pl:string}{
    const noun:NounStructure = rand(pickTheme('n',theme))
    return{
        jp:noun.jp+'-de',
        pl:noun.pl.M+'-owa'
    }
}
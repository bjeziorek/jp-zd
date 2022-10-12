import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function noun(theme:Theme):{jp:string,pl:string}{
    const noun:NounStructure = rand(pickTheme('n',theme))
    return{
        jp:noun.jp+'-ni',
        pl:noun.pl.N
    }
}
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function noun(theme:string):{jp:string,pl:string}{
    const noun = rand(pickTheme(theme))
    return{
        jp:noun.jp+'-de',
        pl:noun.pl.M+'-owa'
    }
}
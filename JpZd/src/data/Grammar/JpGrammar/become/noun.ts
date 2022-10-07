import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"
import { adjectives } from "../../../dictionary"

export function noun(theme:string):{jp:string,pl:string}{
    const noun = rand(pickTheme(theme))
    return{
        jp:noun.jp+'-ni',
        pl:noun.pl.N
    }
}
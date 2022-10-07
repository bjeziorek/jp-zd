import rand from "../../../../utils/randomArrayElement"
import { adjectives } from "../../../dictionary"

export function naAdj(theme:string):{jp:string,pl:string}{
    const adj = rand(adjectives.filter(el=>{return el.jp.match(/na$/)}))
    return{
        jp:adj.jp.replace(/na$/,'-de'),
        pl:adj.pl
    }
}
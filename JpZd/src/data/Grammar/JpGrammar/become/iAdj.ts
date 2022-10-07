import rand from "../../../../utils/randomArrayElement"
import { adjectives } from "../../../dictionary"

export function iAdj(theme:string):{jp:string,pl:string}{
    const adj = rand(adjectives.filter(el=>{return el.jp.match(/i$/)}))
    return{
        jp:adj.jp.replace(/i$/,'ku'),
        pl:adj.pl
    }
}
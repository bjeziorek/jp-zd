import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function hurts(theme:string):DataType{
    const who = rand(pickTheme(theme))
    const what = rand(pickTheme('body'))
    return{
        romaji:who.jp+'-wa '+what.jp+'-ga itai desu',
        meaning:who.pl.B+' boli '+what.pl.M,
    }
}
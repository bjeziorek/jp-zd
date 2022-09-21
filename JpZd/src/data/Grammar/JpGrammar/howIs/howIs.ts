import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function howIs(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const what=rand(pickTheme('items'))
    return{
        romaji:who.jp+'-no '+what.jp+'-wa donna '+what.jp+' desu-ka?',
        meaning:'Jak wygląda '+what.pl.M+' '+who.pl.D+'?'
    }
}
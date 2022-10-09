import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
//todo
export function aru(theme:string):DataType{
    const what1=rand(pickTheme('items'))
    const what2=rand(pickTheme('food'))
    return{
        romaji:what1.jp+'-wa arimasu-ga '+what2.jp+'-wa arimasen.',
        meaning:'Są '+what1.pl.M_pl+', ale nie ma '+what2.pl.D_pl+'.'
    }
}
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function from(theme:string):DataType{
    const who1=rand(pickTheme('myFamily'))
    const who2=rand(pickTheme(theme))
    const what=rand(pickTheme('items'))
    return{
        romaji:who1.jp+'-kara-wa '+what.jp+'-ga kimasu-ga '+who2.jp+'-kara-wa kimasen.',
        meaning:'Przychodzą '+what.pl.M_pl+' od '+who1.pl.D+', ale nie przychodzą od '+who2.pl.D+'.'
    }
}
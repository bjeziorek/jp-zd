import DataType from "../types/DataType.model";
import { pickTheme } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";

export function hurts(theme:string):DataType{
    const bodyPartsPool=[
        {jp:'atama',pl:'głowa'},
        {jp:'te',pl:'ręka'},
        {jp:'ashi',pl:'noga'},
        {jp:'onaka',pl:'brzuch'},
        {jp:'yubi',pl:'palec'},
    ]

    const who = rand(pickTheme(theme))
    const what = rand(bodyPartsPool)

    return{
        romaji:who.jp+'-wa '+what.jp+'-ga itai desu',
        meaning:who.pl.B+' boli '+what.pl,
    }
}
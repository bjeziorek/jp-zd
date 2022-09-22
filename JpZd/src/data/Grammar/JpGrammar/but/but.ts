import { adjectives } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function but(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const adj1=rand(adjectives).replace(/na$/,'')
    const adj2=rand(adjectives).replace(/na$/,'')
    return{
        romaji:who.jp+'-wa '+adj1.jp+' desu-ga '+adj2.jp+' desu',
        meaning:who.pl.M+' jest '+adj1.pl+', ale '+adj2.pl
    }
}
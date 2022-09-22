import { adjectives } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function but(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const adj1=rand(adjectives)
    const adj2=rand(adjectives)
    return{
        romaji:who.jp+'-wa '+adj1.jp.replace(/na$/,'')+' desu-ga '+adj2.jp.replace(/na$/,'')+' desu',
        meaning:who.pl.M+' jest '+adj1.pl+', ale '+adj2.pl
    }
}
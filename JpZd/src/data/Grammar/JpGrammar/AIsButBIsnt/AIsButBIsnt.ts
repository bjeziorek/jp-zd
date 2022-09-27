import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function AIsButBIsnt(theme:string):DataType{
    const who1 = rand(pickTheme(theme))
    const who2 = rand(pickTheme(theme))
    const is1 = who1.isAlive?'imasu':'arimasu'
    const is2 = who2.isAlive?'imasen':'arimasen'
    return{
        romaji:who1.jp+'-wa '+is1+'-ga '+who2.jp+'-wa '+is2,
        meaning:'Jest '+who1.pl.M+', ale nie ma '+who2.pl.D
    }
}
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
//todo
export function withSb(theme:string):DataType{
    const who1=rand(pickTheme(theme))
    const who2=rand(pickTheme(theme))
    return{
        romaji:who1.jp+'-to-wa hanashimashita-ga '+who2.jp+'-to-wa hanasemasen deshita.',
        meaning:'Rozmawiałem z '+who1.pl.N+', ale nie rozmawiałem z '+who2.pl.N
    }
}
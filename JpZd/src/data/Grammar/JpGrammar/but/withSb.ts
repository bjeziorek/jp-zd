import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
//todo
export function withSb(theme:Theme):DataType{
    const who1:NounStructure=rand(pickTheme('n',theme))
    const who2:NounStructure=rand(pickTheme('n',theme))
    return{
        romaji:who1.jp+'-to-wa hanashimashita-ga '+who2.jp+'-to-wa hanasemasen deshita.',
        meaning:'Rozmawiałem z '+who1.pl.N+', ale nie rozmawiałem z '+who2.pl.N
    }
}
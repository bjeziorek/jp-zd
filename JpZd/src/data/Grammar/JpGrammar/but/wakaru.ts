import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function wakaru(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const lang1:NounStructure=rand(pickTheme('languages'))
    const lang2:NounStructure=rand(pickTheme('languages'))
    return{
        romaji:who.jp+'-wa '+lang1.jp+'-wa wakarimasu-ga '+lang2.jp+'-wa wakarimesen',
        meaning:who.pl.M+' rozumie '+lang1.pl.M+', ale nie ruzumie '+lang2.pl.D
    }
}
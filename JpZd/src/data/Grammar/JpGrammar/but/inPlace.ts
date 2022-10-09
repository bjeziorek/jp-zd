import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function inPlace(theme:string):DataType{
    const what:NounStructure=rand(pickTheme('items'))
    const where1:NounStructure=rand(pickTheme('places'))
    const where2:NounStructure=rand(pickTheme('places'))
    return{
        romaji:where1.jp+'-ni-wa '+what.jp+'-ga arimasu-ga '+where2.jp+'-ni-wa arimasen.',
        meaning:what.pl.M+' jest w '+where1.pl.Msc+', ale nie ma w '+where2.pl.Msc+'.'
    }
}
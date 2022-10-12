import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function aru(theme:Theme):DataType{
    const what1:NounStructure=rand(pickTheme('n','items'))
    const what2:NounStructure=rand(pickTheme('n','food'))
    return{
        romaji:what1.jp+'-wa arimasu-ga '+what2.jp+'-wa arimasen.',
        meaning:'Są '+what1.pl.M_pl+', ale nie ma '+what2.pl.D_pl+'.'
    }
}
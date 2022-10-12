import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function from(theme:Theme):DataType{
    const who1:NounStructure=rand(pickTheme('n','myFamily'))
    const who2:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','items'))
    return{
        romaji:who1.jp+'-kara-wa '+what.jp+'-ga kimasu-ga '+who2.jp+'-kara-wa kimasen.',
        meaning:'Przychodzą '+what.pl.M_pl+' od '+who1.pl.D+', ale nie przychodzą od '+who2.pl.D+'.'
    }
}
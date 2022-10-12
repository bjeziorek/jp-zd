import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function aBit(theme:Theme):DataType{
    const place:NounStructure=rand(pickTheme('n','places'))
    const who:NounStructure=rand(pickTheme('n',theme))
   return{
        romaji:place.jp+'-ni '+who.jp+'-ga sukoshi imasu',
        meaning:'W '+place.pl.Msc+' jest niewiele (trochę) '+who.pl.D_pl+'.'
    }
}
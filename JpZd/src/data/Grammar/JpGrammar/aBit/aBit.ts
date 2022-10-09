import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function aBit(theme:string):DataType{
    const place:NounStructure=rand(pickTheme('places'))
    const who:NounStructure=rand(pickTheme(theme))
   return{
        romaji:place.jp+'-ni '+who.jp+'-ga sukoshi imasu',
        meaning:'W '+place.pl.Msc+' jest niewiele (trochę) '+who.pl.D_pl+'.'
    }
}
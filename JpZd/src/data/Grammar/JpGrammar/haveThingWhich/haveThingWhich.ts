import { adjectives } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function haveThingWhich(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const adj=rand(adjectives)
    const body=rand(pickTheme('body'))
    return{
        romaji:'ano '+body.jp+'-ga '+adj.jp+' '+who.jp,
        meaning:'Ten/ta/to '+who.pl.M+' o '+adj.pl+' '+body.pl.Msc
    }
}
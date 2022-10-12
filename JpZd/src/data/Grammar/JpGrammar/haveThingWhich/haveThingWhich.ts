import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function haveThingWhich(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const adj:AdjectiveStructure=rand(pickTheme('a','all'))
    const body:NounStructure=rand(pickTheme('n','body'))
    return{
        romaji:'ano '+body.jp+'-ga '+adj.jp+' '+who.jp,
        meaning:'Ten/ta/to '+who.pl.M+' o '+adj.pl+' '+body.pl.Msc
    }
}
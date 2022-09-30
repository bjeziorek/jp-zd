import { verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function inPlace(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const where = rand(pickTheme('places'))
    const food = rand(pickTheme('food'))
    const verb = rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa '+where.jp+'-de '+food.jp+'-o '+verb.jp.dictionaryForm,
        meaning:who.pl.M+' w '+where.pl.Msc+' '+verb.pl.os3+' '+food.pl.B
    }
}
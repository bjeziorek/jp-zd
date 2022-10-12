import { oVerbFilter } from './../../../../utils/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function inPlace(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const where:NounStructure = rand(pickTheme('n','places'))
    const food:NounStructure = rand(pickTheme('n','food'))
    const verb:VerbStructure = rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-wa '+where.jp+'-de '+food.jp+'-o '+verb.jp.dictionaryForm,
        meaning:who.pl.M+' w '+where.pl.Msc+' '+verb.pl.os3+' '+food.pl.B
    }
}
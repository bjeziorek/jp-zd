import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { convertNumberToText } from "../../../numbers";

export function cost(theme:Theme):DataType{
    const item1:NounStructure=rand(pickTheme('n',theme))
    const item2:NounStructure=rand(pickTheme('n',theme))
    const n=Math.ceil(Math.random()*10)
    const en=Math.ceil(Math.random()*10000000)
    return{
        romaji:item1.jp+'-to '+item2.jp+'-wa zenbu-de ikura desuka? '+convertNumberToText(n,'things')+'-de '+convertNumberToText(en,'en')+' desu.',
        meaning:item1.pl.M+' i '+item2.pl.M+' ile razem kosztują? ' +n+' sztuk kosztuje '+en+' jenów.'
    }
}
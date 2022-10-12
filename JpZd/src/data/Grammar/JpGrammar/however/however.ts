import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function however(theme:Theme):DataType{
    const what:NounStructure=rand(pickTheme('n',theme))
    const adj1:AdjectiveStructure=rand(pickTheme('a','all'))
    const adj2:AdjectiveStructure=rand(pickTheme('a','all'))
    return{
        romaji:what.jp+'-wa '+adj1.jp.replace(/na$/,'')+' desu. Shikashi '+adj2.jp.replace(/na$/,'')+' desu.',
        meaning:what.pl.M+' jest '+adj1.pl+'. Jednakże jest '+adj2.pl+'.'
    }
}
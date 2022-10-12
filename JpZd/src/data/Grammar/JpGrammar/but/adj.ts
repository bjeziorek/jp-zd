import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function adj(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const adj1:AdjectiveStructure=rand(pickTheme('a','all'))
    const adj2:AdjectiveStructure=rand(pickTheme('a','all'))
    return{
        romaji:who.jp+'-wa '+adj1.jp.replace(/na$/,'')+' desu-ga '+adj2.jp.replace(/na$/,'')+' desu',
        meaning:who.pl.M+' jest '+adj1.pl+', ale '+adj2.pl
    }
}
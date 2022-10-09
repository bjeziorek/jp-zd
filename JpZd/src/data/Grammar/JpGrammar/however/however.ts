import { NounStructure } from './../../../../types/Noun.model';
import { adjectives } from './../../../dictionary';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function however(theme:string):DataType{
    const what:NounStructure=rand(pickTheme(theme))
    const adj1:AdjectiveStructure=rand(adjectives)
    const adj2:AdjectiveStructure=rand(adjectives)
    return{
        romaji:what.jp+'-wa '+adj1.jp.replace(/na$/,'')+' desu. Shikashi '+adj2.jp.replace(/na$/,'')+' desu.',
        meaning:what.pl.M+' jest '+adj1.pl+'. Jednakże jest '+adj2.pl+'.'
    }
}
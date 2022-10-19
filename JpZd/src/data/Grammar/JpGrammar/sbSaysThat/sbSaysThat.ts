import { AdjectiveStructure } from '../../../../types/Adjective.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { Theme } from "../../../../types/Theme.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function sbSaysThat(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n',['animals','items']))
    const adj:AdjectiveStructure=rand(pickTheme('a','all'))
    
    return{
        romaji:who.jp+'-wa '+what.jp+'-wa '+adj.jp.replace(/na$/,'')+' to iu',
        meaning:who.pl.M+' mówi, że '+what.pl.M+' jest '+adj.pl
    }
}
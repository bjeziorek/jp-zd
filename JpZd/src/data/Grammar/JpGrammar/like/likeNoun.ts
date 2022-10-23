import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function likeNoun(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const noun:NounStructure=rand(pickTheme('n',['items','clothes','countries','events','animals','languages','places','month','nationality','vehicles','professions','week','weather']))
    
    return{
        romaji:who.jp+'-wa '+noun.jp+'-ga suki desu',
        meaning:who.pl.M+' lubi '+noun.pl.B_pl
    }
}
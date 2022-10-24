import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function youKnowSb(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    return{
        romaji:'Anata-wa '+who.jp+'-o shitte imasuka?',
        meaning:'Czy znasz '+who.pl.D
    }
}
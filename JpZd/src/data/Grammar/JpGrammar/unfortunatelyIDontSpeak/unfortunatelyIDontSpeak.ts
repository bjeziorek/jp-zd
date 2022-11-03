import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function unfortunatelyIDontSpeak(theme:Theme):DataType{

    const lang:NounStructure=rand(pickTheme('n','languages'))
    return{
        romaji:'Zannen-nagara, '+lang.jp+'-ga hanasemasen.',
        meaning:'Niestety nie mówię w '+lang.pl.N
    }
}
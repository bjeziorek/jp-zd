import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function iDidntKnowSthIsAdj(theme:Theme):DataType{
    const noun:NounStructure=rand(pickTheme('n',theme))
    const adj:AdjectiveStructure=rand(pickTheme('a','all'))
    return{
        romaji:'Watashi-wa '+noun.jp+'-ga '+adj.jp+'-koto-o shirimasen deshita.',
        meaning:'Nie wiedziałem, że '+noun.pl.M+' jest '+adj.pl+'.'
    }
}
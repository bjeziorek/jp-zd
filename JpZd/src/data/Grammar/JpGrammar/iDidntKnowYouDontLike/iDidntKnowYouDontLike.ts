import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function iDidntKnowYouDontLike(theme:Theme):DataType{
    const noun:NounStructure=rand(pickTheme('n',theme))
    const who:NounStructure=rand(pickTheme('n',['professions','animals']))
    return{
        romaji:'Watashi-wa '+who.jp+'-ga '+noun.jp+'-ga kiraina-koto-o shirimasen deshita.',
        meaning:'Nie wiedziałem, że '+who.pl.M+' nie lubi '+noun.pl.D+'.'
    }
}
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function likeVerb(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v',['actions','move']))
    
    return{
        romaji:who.jp+'-wa '+verb.jp.dictionaryForm+'-koto-ga suki desu',
        meaning:who.pl.M+' lubi '+verb.pl.imieslowNiedokonany
    }
}
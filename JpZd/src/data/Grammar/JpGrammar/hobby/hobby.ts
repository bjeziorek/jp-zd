import { oVerbFilter } from './../../../../utils/filters/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function hobby(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','items'))
    const verb:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:who.jp+'-no shumi-wa '+what.jp+'-o '+verb.jp.dictionaryForm+' koto desu',
        meaning:'Hobby '+who.pl.D+ ' to '+verb.pl.imieslowNiedokonany+' '+what.pl.D
    }
}
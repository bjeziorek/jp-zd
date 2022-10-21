import { AdjectiveStructure } from '../../../../types/Adjective.model';
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { eVerbFilter } from '../../../../utils/filters/eVerbFilter';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from '../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
import { verbFormJp } from '../../../dictionary';
export function duringTime(theme:Theme):DataType{

    const who:NounStructure=rand(pickTheme('n',theme))
    const place1:NounStructure=rand(pickTheme('n','places'))
    const who2:NounStructure=rand(pickTheme('n','professions'))
    const verb1:VerbStructure=rand(pickTheme('v','actions'))
    const adj:AdjectiveStructure=rand(pickTheme('a','all'))
    const what:NounStructure=rand(pickTheme('n','items'))
    const verb2:VerbStructure=rand(pickTheme('v','actions').filter(oVerbFilter))

    return{
        romaji:who.jp+'-wa, '+who2.jp+'-ga '+verbFormJp(verb1.jp.dictionaryForm,'te')+' iru toki, '+place1.jp+'-de '+adj.jp+' '+what.jp+'-o '+verbFormJp(verb2.jp.dictionaryForm,'masu'),
        meaning:who.pl.M+' podczas, gdy '+who2.pl.M+' '+ verb1.pl.os3+', '+verb2.pl.os3+'ł(a) '+adj.pl+' '+what.pl.B+' w '+place1.pl.Msc
    }
}
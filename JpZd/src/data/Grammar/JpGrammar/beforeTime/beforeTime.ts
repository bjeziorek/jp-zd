import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { eVerbFilter } from '../../../../utils/filters/eVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
import { verbFormJp } from '../../../dictionary';
export function beforeTime(theme: Theme): DataType {

    const who: NounStructure = rand(pickTheme('n', theme))
    const place1: NounStructure = rand(pickTheme('n', 'places'))
    const place2: NounStructure = rand(pickTheme('n', 'places'))
    const verb1: VerbStructure = rand(pickTheme('v', 'move').filter(eVerbFilter))
    const adj: AdjectiveStructure = rand(pickTheme('a', 'all'))
    const what: NounStructure = rand(pickTheme('n', 'items'))
    const verb2: VerbStructure = rand(pickTheme('v', 'actions').filter(oVerbFilter))

    return {
        romaji: who.jp + '-wa ' + place1.jp + '-e ' + verb1.jp.dictionaryForm + ' toki, ' + place2.jp + '-de ' + adj.jp + ' ' + what.jp + '-o ' + verbFormJp(verb2.jp.dictionaryForm, 'mashita'),
        meaning: who.pl.M + ' gdy (zanim/przed) ' + verb1.pl.os3 + ' do ' + place1.pl.D + ', ' + verb2.pl.os3 + 'ł(a) ' + adj.pl + ' ' + what.pl.B + ' w ' + place2.pl.Msc
    }
}
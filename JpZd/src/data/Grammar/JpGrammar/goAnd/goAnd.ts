import { oVerbFilter } from '../../../../utils/oVerbFilter';
import { VerbStructure } from '../../../../types/Verb.model';
import { NounStructure, Collocations } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from '../../../../types/Theme.model';
import { verbFormJp } from '../../../dictionary';
export function goAnd(theme: Theme): DataType {

    const where: NounStructure = rand((pickTheme('n', ['events', 'places'])as NounStructure[])
        .filter((el: NounStructure) => {
            return el.collocations
        }))
        
    const what: NounStructure = rand(pickTheme('n', 'items'))
    const who: NounStructure = rand(pickTheme('n', theme))
    const move: Collocations = rand(where.collocations!.filter((element: { particle: string; })=>{return element.particle==='ni'}))
    const verb: VerbStructure = rand(pickTheme('v', 'actions').filter(oVerbFilter))
    const particlePl = where.collocations!.filter(el => { return el.particle === 'ni' })[0].particlePl || { particle: 'DO', casePl: 'D' }

    return {
        romaji: who.jp + '-wa ' + where.jp + '-ni, ' + what.jp + '-o ' + verbFormJp(verb.jp.dictionaryForm, 'te') + ' ' + move.verb,
        meaning: who.pl.M + ' ' + particlePl.particle + ' ' + where.pl[particlePl.casePl] + ' będzie ' + move.meaning + ' i ' + verb.pl.niedokonany + ' ' + what.pl.B
    }
}
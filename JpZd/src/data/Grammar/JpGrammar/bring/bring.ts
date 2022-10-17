import DataType from '../../../../types/DataType.model';
import { Collocations, NounStructure } from '../../../../types/Noun.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from './../../../../types/Theme.model';
export function bring(theme:Theme):DataType{
    const where: NounStructure = rand((pickTheme('n', ['events', 'places'])as NounStructure[])
    .filter((el: NounStructure) => {
        return el.collocations
    }))
    
const what: NounStructure = rand(pickTheme('n', 'items'))
const who: NounStructure = rand(pickTheme('n', theme))
const particlePl = where.collocations!.filter(el => { return el.particle === 'ni' })[0].particlePl || { particle: 'DO', casePl: 'D' }

return {
    romaji: who.jp + '-wa ' + where.jp + '-ni, ' + what.jp + '-o motte ikimasu / kaerimasu',
    meaning: who.pl.M + ' ' + particlePl.particle + ' ' + where.pl[particlePl.casePl] + ' przyniesie / odda ' + what.pl.B
}
}
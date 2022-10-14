import { CaseType } from '../../../../types/Case.model';
import { Collocations, NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from '../../../../types/Theme.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
export function leave(theme: Theme): DataType {

    const who: NounStructure = rand(pickTheme('n', theme))
    const where: NounStructure = rand(pickTheme('n', ['places', 'vehicles'])
    .filter(el=>{return el.collocations}))//sprawdza czy posiada jakiekolwiek kolokacje
    let v=(where.collocations as Collocations[])[0];
     
    for(let i=0;i<(where.collocations as Collocations[]).length;i++){
        if((where.collocations as Collocations[])[i].meaning==='wysiadać'||
        (where.collocations as Collocations[])[i].meaning==='wychodzić'){
            v=(where.collocations as Collocations[])[i]
            break
        }
    }
    const c = (v.particlePl as {casePl:CaseType}).casePl as CaseType     
return {
    romaji: who.jp + '-wa ' + where.jp + '-ni ' + v.verb,
    meaning: who.pl.M + ' będzie ' + v.meaning + ' '+v.particlePl?.particle+' ' + where.pl[c]
}
}
import { CaseType } from '../../../../types/Case.model';
import { Collocations, NounStructure } from '../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from '../../../../types/Theme.model';
import { pickTheme } from '../../../../utils/pickTheme';
import rand from '../../../../utils/randomArrayElement';
export function enter(theme: Theme): DataType {

    const who: NounStructure = rand(pickTheme('n', theme))
    const where: NounStructure = rand(pickTheme('n', ['places', 'vehicles'])
    .filter(el=>{return el.collocations}))//sprawdza czy posiada jakiekolwiek kolokacje
    let v=(where.collocations as Collocations[])[0];
      //uwaga: nie zawsze kolokacja z -ni bedzie na indeksie 0! przefiltrowac kolokacje
    // i dostawac sie do nich z osobnej zmiennej czyli ulepszyc v i c
    // DONE below
    for(let i=0;i<(where.collocations as Collocations[]).length;i++){
        if((where.collocations as Collocations[])[i].particle==='ni'){
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
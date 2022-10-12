import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { Collocations } from '../../../../types/Noun.model';
import { nouns } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function putOutClothes(theme: Theme): DataType {
    const who: NounStructure = rand(pickTheme('n', theme))
    const what: NounStructure = rand(pickTheme('n', 'clothes'))
    let verbJp = (() => {
        let list = ''
        const filteredOut = what.collocations?.filter((el: Collocations) => el.tags?.includes('out'))
        if (filteredOut) {//uwaga! to mimo wszystko moze byc puste! zrobic ta madrzej
            filteredOut.forEach((el: Collocations) => {
                list += el.verb + '/'
            })
        }
        return list
    })()
    return {
        romaji: who.jp + '-wa ' + what.jp + '-o ' + verbJp.replace(/\/$/, ''),
        meaning: who.pl.M + ' ściąga ' + what.pl.B
    }
}
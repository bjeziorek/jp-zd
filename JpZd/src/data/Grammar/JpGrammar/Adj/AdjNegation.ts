import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function AdjNegation(theme: Theme): DataType {
    const noun: NounStructure = rand(pickTheme('n',theme))
    const adj = (() => {
        const a: AdjectiveStructure = rand(pickTheme('a','all'))
        const n: NounStructure = rand(pickTheme('n',theme))
        return Math.random() > 0.5
            ? {
                jp: a.jp.match(/i$/) ? a.jp.replace(/i$/, 'kunai desu') + ' / ' + a.jp.replace(/i$/, 'ku arimasen') : a.jp.replace(/na$/, ' dewa/jaa arimasen'),
                pl: a.pl
            }
            : {
                jp: n.jp + ' dewa/jaa arimasen',
                pl: n.pl.N
            }
    })()
    return {
        romaji: noun.jp + '-wa ' + adj.jp,
        meaning: noun.pl.M + ' nie jest ' + adj.pl
    }
}
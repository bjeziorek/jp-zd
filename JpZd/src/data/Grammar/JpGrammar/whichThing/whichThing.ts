import { adjectives } from './../../../dictionary';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import DataType from '../../../../types/DataType.model';

//77 i-przym i na-przym
export function whichThing(theme: string): DataType {
    const who = rand(pickTheme(theme))
    const adj = rand(adjectives)
    const body = rand(pickTheme('body'))
    return {
        romaji: 'ano ' + body.jp + '-no ' + adj.jp + ' ' + who.jp,
        meaning: 'Ten/ta/to ' + who.pl.M + ' o ' + adj.pl + ' ' + body.pl.Msc
    }
}
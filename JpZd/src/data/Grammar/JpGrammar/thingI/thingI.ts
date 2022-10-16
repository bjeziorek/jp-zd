import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { things } from './things';
import { actions } from './actions';

export function thingILikeDislike(theme: Theme): DataType {
    const adj = rand(pickTheme('a','all').filter((el: { jp: string; }) => { return el.jp.match(/sukina|kiraina/) }))
    const monoKoto = Math.random() > 0.5 ? { jp: 'mono', pl: 'rzecz' } : { jp: 'koto', pl: 'czynność' }
    const what = (() => {
        switch (monoKoto.jp) {
            case 'mono':
                const thing=things()
                return {
                    jp:thing.jp,
                    pl:thing.pl.M
                }
            case 'koto':
                    const action = actions()
                return {
                    jp:action.jp.dictionaryForm+'-koto',
                    pl:action.pl.infinitive
                }
            default:
                console.log('monoKoto doesn\'t match: ', monoKoto.jp)
                return things()
        }
    })()
    return {
        romaji: 'Watashi-no/ga ' + adj.jp + '-' + monoKoto.jp + '-wa ' + what.jp,
        meaning: 'Moja ' + adj.pl + ' ' + monoKoto.pl + ' to ' + what.pl
    }
}
import { jpVerbFormsPool, verbFormJp, verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function something(theme: string): DataType {

    const who = rand(pickTheme(theme))
    const where = rand(pickTheme('places'))
    const oVerb = rand(verbs.actions.filter(el => { return el.jp.particle.includes('o') }))
    const answer = Math.random() > 0.5
        ? {
            jp: 'Hai, nan-de-mo ' + verbFormJp(oVerb.jp.dictionaryForm, jpVerbFormsPool.masu) + '.',
            pl: 'Tak, ' + oVerb.pl.os3 + ' cokolwiek.'
        }
        : {
            jp: 'Iee, nani-mo ' + verbFormJp(oVerb.jp.dictionaryForm, jpVerbFormsPool.masen) + '.',
            pl: 'Nie, nie ' + oVerb.pl.os3 + ' nic.'
        }
    return {
        romaji: who.jp + '-wa ' + where.jp + '-de nani-ka ' +verbFormJp(oVerb.jp.dictionaryForm, jpVerbFormsPool.masu) + '-ka. ' + answer.jp,
        meaning: '[Czy] ' + who.pl.M + ' ' + oVerb.pl.os3 + ' coś w ' + where.pl.Msc + '? ' + answer.pl
    }
}
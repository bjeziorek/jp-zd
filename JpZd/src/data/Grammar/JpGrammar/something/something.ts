import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { jpVerbFormsPool, verbFormJp, verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function something(theme: Theme): DataType {

    const who:NounStructure = rand(pickTheme('n',theme))
    const where :NounStructure= rand(pickTheme('n','places'))
    const oVerb :VerbStructure= rand(pickTheme('v','actions').filter(oVerbFilter))
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
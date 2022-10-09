import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { jpVerbFormsPool, verbFormJp, verbs } from "../../../dictionary";

export function anytime(theme:string):DataType{
    const who = rand(pickTheme(theme))
    const where = rand(pickTheme('places'))
    const move = rand(verbs.move)
    const answer = Math.random() > 0.5
        ? {
            jp: 'Hai, itsu-de-mo '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu)+'.',
            pl:'Tak, '+move.pl.os3+' kiedykolwiek.'
        }
        : {
            jp: 'Hai, itsu-mo '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu)+'.',
            pl:'Tak, zawsze '+move.pl.os3+'.'
        }
    return {
        romaji: who.jp + '-wa ' + where.jp + '-e itsu-ka ' +verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu)+ '-ka. '+answer.jp,
        meaning: '[Czy] ' + who.pl.M + ' ' + move.pl.os3 + ' kiedyś do ' + where.pl.Msc + '? '+answer.pl
    }
}
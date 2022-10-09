import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp, verbs } from "../../../dictionary";

export function somewhere(theme:string):DataType{
    const who:NounStructure = rand(pickTheme(theme))
    const move:VerbStructure = rand(verbs.move)
    const answer = Math.random() > 0.5
        ? {
            jp: 'Hai, doko-e-de-mo '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu)+'.',
            pl:'Tak, '+move.pl.os3+' gdziekolwiek.'
        }
        : {
            jp: 'Iee, doko-e-mo '+verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masen)+'.',
            pl:'Nie, nigdzie nie '+move.pl.os3+'.'
        }
    return {
        romaji: who.jp + '-wa doko-ka ' +verbFormJp(move.jp.dictionaryForm,jpVerbFormsPool.masu) + '-ka. '+answer.jp,
        meaning: who.pl.M+ ' gdzieś ' + move.pl.os3 + '? '+answer.pl
    }
}
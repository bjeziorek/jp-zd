import { jpVerbFormsPool } from './../../../dictionary';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp, verbs } from '../../../dictionary';

export function so(theme:string):DataType{
    const what:NounStructure=rand(pickTheme(theme))
    const imasu_arimasu=what.isAlive?'imasu':'arimasu'
    const verb=rand(verbs.actions)
    return{
        romaji:what.jp+'-ga '+imasu_arimasu+'. Dakara, '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.naide)+' kudasai.',
        meaning:'[Tu] jest '+what.pl.M+'. Dlatego proszę nie '+verb.pl.infinitive+'.'
    }
}
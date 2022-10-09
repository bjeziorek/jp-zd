import DataType from "../../../../types/DataType.model";
import { NounStructure } from "../../../../types/Noun.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { jpVerbFormsPool, verbFormJp, verbs } from "../../../dictionary";

export function because(theme:string):DataType{
    const what:NounStructure=rand(pickTheme(theme))
    const imasu_arimasu=what.isAlive?'imasu':'arimasu'
    const verb=rand(verbs.actions)
    return{
        romaji:what.jp+'-ga '+imasu_arimasu+'-kara, '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.naide)+' kudasai.',
        meaning: 'Proszę nie '+verb.pl.infinitive+', ponieważ [tu] jest '+what.pl.M+'.'
    }
}
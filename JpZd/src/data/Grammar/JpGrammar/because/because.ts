import { VerbStructure } from './../../../../types/Verb.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { NounStructure } from "../../../../types/Noun.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { jpVerbFormsPool, verbFormJp } from "../../../dictionary";

export function because(theme:Theme):DataType{
    const what:NounStructure=rand(pickTheme('n',theme))
    const imasu_arimasu=what.isAlive?'imasu':'arimasu'
    const verb:VerbStructure=rand(pickTheme('v','actions'))
    return{
        romaji:what.jp+'-ga '+imasu_arimasu+'-kara, '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.naide)+' kudasai.',
        meaning: 'Proszę nie '+verb.pl.infinitive+', ponieważ [tu] jest '+what.pl.M+'.'
    }
}
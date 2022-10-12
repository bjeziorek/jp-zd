import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';

import DataType from "../../../../types/DataType.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"
import { jpVerbFormsPool, verbFormJp } from "../../../dictionary"
import { convertNumberToText } from "../../../numbers"

export function doWith(theme:Theme):DataType{
    const r=Math.floor(Math.random()*12+1)
    const hour={jp:convertNumberToText(r,'ji')+'-ni',pl:'o godzinie '+r+':00'}
    const who:NounStructure = rand(pickTheme('n',theme))
    const what:NounStructure = rand(pickTheme('n','items'))
    const what2:NounStructure = rand(pickTheme('n','items'))
    const verb:VerbStructure = rand(pickTheme('v','actions'))

    return{
        romaji:hour.jp+' '+who.jp+'-wa '+what.jp+'-de '+what2.jp+'-o '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+' ne',
        meaning:hour.pl +' '+who.pl.M+' '+verb.pl.os3+' '+what2.pl.B+' za pomocą '+what.pl.D+', prawda?'
    }
}
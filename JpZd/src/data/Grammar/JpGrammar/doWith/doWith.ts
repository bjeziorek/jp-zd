
import DataType from "../../../../types/DataType.model"
import { pickTheme, pickVerb } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"
import { jpVerbFormsPool, verbFormJp } from "../../../dictionary"
import { convertNumberToText } from "../../../numbers"

export function doWith(theme:string):DataType{
    console.log('in')
    const r=Math.floor(Math.random()*12+1)
    const hour={jp:convertNumberToText(r,'ji')+'-ni',pl:'o godzinie '+r+':00'}
    const who = rand(pickTheme(theme))
    const what = rand(pickTheme('items'))
    const what2 = rand(pickTheme('items'))
    const verb = rand(pickVerb('actions'))
    console.log(who,what,verb)
    return{
        romaji:hour.jp+' '+who.jp+'-wa '+what.jp+'-de '+what2.jp+'-o '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+' ne',
        meaning:hour.pl +' '+who.pl.M+' '+verb.pl.os3+' '+what2.pl.B+' za pomocą '+what.pl.D+', prawda?'
    }
}
import DataType from "../../../../types/DataType.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"
import { daysOfMonth } from "./daysOfMonth"
import { months } from "./months"
import { years } from "./years"

export function calendar(theme:string):DataType {
    const d=daysOfMonth()
    const m=months()
    const y=years()
    const w=rand(pickTheme('week'))
    return{
        romaji: 'Kyou-wa '+y.romaji+' '+m.romaji+' '+d.romaji+' ('+w.jp+').',
        meaning: 'Dzisiaj jest '+y.meaning+' '+m.meaning+' '+d.meaning+' ('+w.pl.M+').',
       
    }
}
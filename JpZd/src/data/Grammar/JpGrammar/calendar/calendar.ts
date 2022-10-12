import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"
import { daysOfMonth } from "./daysOfMonth"
import { months } from "./months"
import { years } from "./years"

export function calendar(theme:Theme):DataType {
    const d=daysOfMonth()
    const m=months()
    const y=years()
    const w:NounStructure=rand(pickTheme('n','week'))
    return{
        romaji: 'Kyou-wa '+y.romaji+' '+m.romaji+' '+d.romaji+' ('+w.jp+').',
        meaning: 'Dzisiaj jest '+y.meaning+' '+m.meaning+' '+d.meaning+' ('+w.pl.M+').',
       
    }
}
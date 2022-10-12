import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function daysOfMonth() {
    const day = rand(pickTheme('t','daysOfMonth'))
    return{
        romaji: day.jp,
        meaning: day.pl
    }
}
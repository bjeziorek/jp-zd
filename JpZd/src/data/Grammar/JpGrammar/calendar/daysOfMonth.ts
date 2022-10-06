import rand from "../../../../utils/randomArrayElement"
import { time } from "../../../dictionary"

export function daysOfMonth() {
    const day = rand(time.daysOfMonth)
    return{
        romaji: day.jp,
        meaning: day.pl
    }
}
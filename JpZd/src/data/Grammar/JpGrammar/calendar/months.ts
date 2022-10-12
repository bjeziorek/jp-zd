import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';

export function months() {
    const month = rand(pickTheme('n','month'))
    return{
        romaji: month.jp,
        meaning: month.pl.M
    }
}
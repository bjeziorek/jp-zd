import { nouns } from '../../../dictionary';
import rand from "../../../../utils/randomArrayElement"

export function months() {
    const month = rand(nouns.month)
    return{
        romaji: month.jp,
        meaning: month.pl.M
    }
}
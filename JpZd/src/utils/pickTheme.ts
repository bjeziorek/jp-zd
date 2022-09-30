import { verbs } from './../data/dictionary';
import { nouns } from "../data/dictionary"

export function pickTheme(theme:string){
    return nouns[theme]
}
export function pickVerb(theme:string){
    return verbs[theme]
}
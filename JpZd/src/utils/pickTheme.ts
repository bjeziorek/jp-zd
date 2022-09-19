import { verbs } from './../data/dictionary';
import { wordList } from "../data/dictionary"

export function pickTheme(theme:string){
    return wordList[theme]
}
export function pickVerb(theme:string){
    return verbs[theme]
}
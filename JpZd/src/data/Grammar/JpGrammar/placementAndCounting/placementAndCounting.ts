import { wordList, numbers } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { prepositions } from "../../../dictionary";
import { pickTheme } from '../../../../utils/pickTheme';

export function placementAndCounting(theme: string): DataType {
    const num = Math.ceil(Math.random() * 10).toString()
    let place = rand(wordList.places)
    let locationPreposition = rand(prepositions.location)
    let who = rand(pickTheme(theme))
    let jest_sa = (who.pl === '1' || parseInt(who.pl) > 4) ? " jest " : " są "
    const numCase=(()=>{
        const n=Number(num)
        if(n===1) return 'M'
        if(n>1&&n<5) return 'M_pl'
        if(n>5) return 'D_pl'
        console.log('niezdefinionany n')
        return 'M'
    })()
    return {
        romaji: place.jp + "-no " + locationPreposition.jp + "-ni " + numbers[who.counter][num] + "-no " + who.jp + "-ga imasu. ",
        meaning: locationPreposition.pl.preposition + " " + place.pl[locationPreposition.pl.case] + " " + jest_sa + " "+num+" " + who.pl[numCase]
    }
}
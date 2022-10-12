import { PrepositionStructure } from './../../../../types/Preposition.model';
import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { numbers } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { prepositions } from "../../../dictionary";
import { pickTheme } from '../../../../utils/pickTheme';

export function placementAndCounting(theme: Theme): DataType {
    const num = Math.ceil(Math.random() * 10).toString()
    let place:NounStructure = rand(pickTheme('n','places'))
    let locationPreposition:PrepositionStructure = rand(prepositions.location)  //////////////////////////!!!!
    let who :NounStructure= rand(pickTheme('n',theme))
    const n=Number(num)
    let jest_sa =(()=>{
        if(n===1) return 'jest'
        if(n>1&&n<5) return 'są'
        if(n>5) return 'jest'
    })()
    const numCase=(()=>{
        if(n===1) return 'M'
        if(n>1&&n<5) return 'M_pl'
        if(n>5) return 'D_pl'
        console.log('niezdefinionany n')
        return 'M'
    })()
    return {
        romaji: place.jp + "-no " + locationPreposition.jp + "-ni " + numbers[who.counter][num] + "-no " + who.jp + "-ga imasu. ",
        meaning: locationPreposition.pl.preposition + " " + place.pl.Msc/*[locationPreposition.pl.case]*/ + " " + jest_sa + " "+num+" " + who.pl[numCase]
    }
}
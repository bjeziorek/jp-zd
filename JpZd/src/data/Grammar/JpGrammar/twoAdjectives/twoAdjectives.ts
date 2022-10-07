import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model"
import rand from "../../../../utils/randomArrayElement"
import { adjectives } from "../../../dictionary"
import { pickTheme } from '../../../../utils/pickTheme';
import { naAdj } from './naAdj';
import { iAdj } from './iAdj';
import { noun as rz } from './noun';

export function twoAdjectives(theme:string):DataType{
    const noun:NounStructure=rand(pickTheme(theme))
    const adj1 = (()=>{
        const n = Math.random()
        if(n<0.33){
            return naAdj(theme)
        }
        if(n<0.66){
            return iAdj(theme)
        }else{
            return rz(theme)
        }
    })()
    const adj2 = rand(adjectives.filter(el=>{return el.jp.match(/i$/)}))
    return{
        romaji:noun.jp+'-wa '+adj1.jp+' '+ adj2.jp+' desu.',
        meaning:noun.pl.M+' jest '+adj1.pl+' i '+adj2.pl+'.'
    }
}
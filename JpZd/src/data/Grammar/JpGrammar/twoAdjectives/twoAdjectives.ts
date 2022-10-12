import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model"
import rand from "../../../../utils/randomArrayElement"
import { pickTheme } from '../../../../utils/pickTheme';
import { naAdj } from './naAdj';
import { iAdj } from './iAdj';
import { noun as rz } from './noun';

export function twoAdjectives(theme:Theme):DataType{
    const noun:NounStructure=rand(pickTheme('n',theme))
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
    const adj2 = rand(pickTheme('a','all').filter(iAdjFilter))
    return{
        romaji:noun.jp+'-wa '+adj1.jp+' '+ adj2.jp+' desu.',
        meaning:noun.pl.M+' jest '+adj1.pl+' i '+adj2.pl+'.'
    }
}
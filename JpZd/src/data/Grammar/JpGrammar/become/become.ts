import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { adjectives } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { iAdj } from './iAdj';
import { naAdj } from './naAdj';
import { noun } from './noun';

export function become(theme:Theme):DataType{
    const what:NounStructure = rand(pickTheme('n',theme))
    const adj=(()=>{
        const r=Math.random()
        if(r<0.33){
            return iAdj(theme)
        }
        if(r<0.66){
            return naAdj(theme)
        }else{
            return noun(theme)
        } 
    })()
    return{
        romaji:what.jp+'-wa '+adj.jp+' naru',
        meaning:what.pl.M+' staje się '+adj.pl
    }
}
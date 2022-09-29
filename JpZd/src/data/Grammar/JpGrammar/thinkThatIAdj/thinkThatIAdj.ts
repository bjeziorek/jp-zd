import { verbs, adjectives } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";

export function thinkThatIAdj(theme:string):DataType{
    const doingWhat = rand(verbs.actions)
    const iAdj = rand(adjectives.filter(el=>{return el.jp.match(/i$/)}))

    return{
        romaji:doingWhat.jp.dictionaryForm+'-koto-wa '+iAdj.jp+'-to omoimasu',
        meaning:'Myślę, że '+doingWhat.pl.imieslowNiedokonany+' jest '+iAdj.pl
    }
}
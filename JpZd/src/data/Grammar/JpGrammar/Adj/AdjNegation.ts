import { NounStructure } from './../../../../types/Noun.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { adjectives } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function AdjNegation(theme:string):DataType{
    const noun:NounStructure = rand(pickTheme(theme))
    const adj=(()=>{
        const a:AdjectiveStructure=rand( adjectives)
        const n:NounStructure=rand( pickTheme(theme))
        return Math.random()>0.5
        ?{
            jp:a.jp.match(/i$/)?a.jp.replace(/i$/,'kunai desu')+' / '+a.jp.replace(/i$/,'ku arimasen'):a.jp.replace(/na$/,' dewa/jaa arimasen'),
            pl:a.pl
        }
        :{
            jp:n.jp+' dewa/jaa arimasen',
            pl:n.pl.N
        }
    })()
    return{
        romaji:noun.jp+'-wa '+adj.jp,
        meaning:noun.pl.M+' nie jest '+adj.pl
    }
}
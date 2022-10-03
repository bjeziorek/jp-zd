import { adjectives, verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function sthWhich(theme:string):DataType{
    const adj=rand(adjectives)  
    const who = rand(pickTheme(theme))
    const verb = rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return {
        romaji: who.jp + '-ga kyou ' + verb.jp.dictionaryForm + '-koto-wa ' + adj.jp+'-koto desu',
        meaning: 'To, co ' +verb.pl.os3+ ' dzisiaj ' + who.pl.M + ' jest ' + adj.pl
    }

}
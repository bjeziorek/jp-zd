import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import VerbStructure from "../../../../types/Verb.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbs } from "../../../dictionary";

export function including(theme: Theme): DataType {
    const verbPool = (() => {
        let pool: any =[]
        for (let key in verbs) {
       //     console.log(verbs[key])//czyli to mi daje cala pule np actions lub move
            //i na takiej puli wlasnie chce crobic filter
            const result=verbs[key].filter(el=>{
                return el.jp.particle.includes('o')
            })
           // console.log(result)
            if(result) pool.push(result)
        }
       // console.log(pool)
        return pool || []
    })().filter((element: Array<VerbStructure>) => {
        console.log('el',element)
        if(element.length>=1) return true
        return false
      });
    //uwaga! tu w tym ifee powyzej (bez filter) istnieje niebezpieczenstwo, ze pu filtrowaniu nic nie znajdzie
    //a wtedy pula czasownikow bedzie pusta, trzeba to jakos zabezpieczyc
  //  console.log(verbPool)

    const verb =rand (verbPool.flat())
    console.log(verbPool,verb)
    const el1:NounStructure=rand(pickTheme('n',theme))
    const el2:NounStructure=rand(pickTheme('n',theme))
    const el3:NounStructure=rand(pickTheme('n',theme))
    return {
        romaji: el1.jp+'-ya '+el2.jp+'-ya '+el3.jp+'-nado-o '+verb.jp.dictionaryForm,
        meaning: verb.pl.os3+' między innymi '+el1.pl.B+', '+el2.pl.B+' i '+el3.pl.B
    }
}
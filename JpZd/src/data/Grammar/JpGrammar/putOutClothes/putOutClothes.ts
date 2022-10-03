import { Collocations } from '../../../../types/Noun.model';
import { nouns } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function putOutClothes(theme:string):DataType{
    const who=rand(pickTheme(theme))
    const what=rand(nouns.clothes)
    let verbJp=(()=>{
        let list=''
        const filteredOut = what.collocations.filter((el:Collocations)=>el.tags?.includes('out'))
        console.log(filteredOut)
        filteredOut.forEach((el:Collocations) => {
            list+=el.verb+'/'
        })
        return list
    })()
    return{
        romaji:who.jp+'-wa '+what.jp+'-o '+verbJp.replace(/\/$/,''),
        meaning:who.pl.M+ ' ściąga '+what.pl.B
    }
}
import { Collocations } from '../../../../types/WordList.model';
import { nouns } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function putOnClothes(theme:string):DataType{
    
    const who=rand(pickTheme(theme))
    const what=rand(nouns.clothes)
    let verbJp=(()=>{
        let list=''
        const filteredIn = what.collocations.filter((el:Collocations)=>el.tags?.includes('in'))
        console.log(filteredIn)
        filteredIn.forEach((el:Collocations) => {
            list+=el.verb+'/'
        })
        return list
    })()
    return{
        romaji:who.jp+'-wa '+what.jp+'-o '+verbJp.replace(/\/$/,''),
        meaning:who.pl.M+ ' ubiera '+what.pl.B
    }
}
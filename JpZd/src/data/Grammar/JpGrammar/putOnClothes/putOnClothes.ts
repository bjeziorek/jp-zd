import { Theme } from './../../../../types/Theme.model';
import { Collocations } from '../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function putOnClothes(theme:Theme):DataType{
    
    const who=rand(pickTheme('n',theme))
    const what=rand(pickTheme('n','clothes'))
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
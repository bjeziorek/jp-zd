import { wordList, adjectives} from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";

export function thinkThatNaAdj(theme:string):DataType{
    const what = rand(wordList.items)
    const naAdj = rand(adjectives.filter(el=>{return el.jp.match(/na$/)}))

    return{
        romaji:what.jp+' '+naAdj.jp.replace(/na$/,'')+'-da to omoimasu',
        meaning:'Myślę, że '+what.pl.M+' jest '+naAdj.pl
   }
}
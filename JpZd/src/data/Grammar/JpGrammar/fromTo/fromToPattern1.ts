import { NounStructure } from './../../../../types/WordList.model';
import DataType from "../../../../types/DataType.model";

export function fromToPattern1(place1:NounStructure,place2:NounStructure): DataType {
    return {
        romaji: place1.jp+'-kara '+place2.jp+'-made dono-kurai kakarimasuka?',
        meaning: 'Ile zabiera [czasu przejście] z(e) '+place1.pl.D+' do '+place2.pl.D+'?'
    }
    
}
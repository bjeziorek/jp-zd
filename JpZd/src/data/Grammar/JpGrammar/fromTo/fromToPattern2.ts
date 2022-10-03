import { NounStructure } from '../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";

export function fromToPattern2(place1:NounStructure,place2:NounStructure): DataType {
    return{
        romaji: place1.jp+'-kara '+place2.jp+'-made dono-gurai desu-ka?',
        meaning: 'Jak daleko [czas lub odlgłość] jest z(e) '+place1.pl.D+' do '+place2.pl.D+'?'
    }

}
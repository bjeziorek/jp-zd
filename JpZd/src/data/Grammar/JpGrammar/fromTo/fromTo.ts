import { NounStructure } from '../../../../types/Noun.model';
import { nouns } from '../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { fromToPattern1 } from './fromToPattern1';
import { fromToPattern2 } from './fromToPattern2';

export function fromTo(theme: string): DataType {
    const place1:NounStructure=rand(nouns.places)
    const place2:NounStructure=rand(nouns.places)
    return Math.random()>0.5?fromToPattern1(place1,place2):fromToPattern2(place1,place2)
}
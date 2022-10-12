import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from '../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { fromToPattern1 } from './fromToPattern1';
import { fromToPattern2 } from './fromToPattern2';
import { pickTheme } from '../../../../utils/pickTheme';

export function fromTo(theme: Theme): DataType {
    const place1:NounStructure=rand(pickTheme('n','places'))
    const place2:NounStructure=rand(pickTheme('n','places'))
    return Math.random()>0.5?fromToPattern1(place1,place2):fromToPattern2(place1,place2)
}
import { Theme } from './../../../../types/Theme.model';
import DataType from '../../../../types/DataType.model';
import rand from '../../../../utils/randomArrayElement';
import { whichThings } from './whichThings';
import { whichTime } from './whichTime';
import { whichAdj } from './whichAdj';
import { whichNoun } from './whichNoun';
import { whichPlace } from './whichPlace';

export function whichType(theme:Theme):DataType{
    const which:DataType = rand([
        whichTime(theme),
        whichAdj(theme),
        whichNoun(theme),
        whichThings(theme),
        whichPlace(theme),
    ])

    return {
        romaji:which.romaji,
        meaning:which.meaning
    }
}
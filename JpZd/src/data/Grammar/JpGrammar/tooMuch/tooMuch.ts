import DataType from '../../../../types/DataType.model';
import rand from '../../../../utils/randomArrayElement';
import { Theme } from './../../../../types/Theme.model';
import { iAdj } from './iAdj';
import { naAdj } from './naAdj';
import { verb } from './verb';
export function tooMuch(theme:Theme):DataType{
    const sentence:DataType=rand([iAdj(theme),naAdj(theme),verb(theme)])
    return{
        romaji:sentence.romaji,
        meaning:sentence.meaning
    }
}
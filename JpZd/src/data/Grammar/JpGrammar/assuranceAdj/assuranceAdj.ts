import { adjectives } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';

export function assuranceAdj(theme:string):DataType{
    const adj=rand(adjectives)
    return {
        romaji:adj.jp+' wazu desu',
        meaning:'Na pewno będzie '+adj.pl
    }
}
import { adjectives } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';

export function substantivisator1(theme:string):DataType{
    const adj=rand( adjectives)
    const jp=adj.jp.match(/na$/)?adj.jp.replace(/na$/,'sa'):adj.jp.replace(/i$/,'sa')
    return{
        romaji:jp,
        meaning:adj.rz
    }
}
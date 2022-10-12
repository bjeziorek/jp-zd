import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function substantivisator1(theme:Theme):DataType{
    const adj=rand( pickTheme('a','all'))
    const jp=adj.jp.match(/na$/)?adj.jp.replace(/na$/,'sa'):adj.jp.replace(/i$/,'sa')
    return{
        romaji:jp,
        meaning:adj.rz
    }
}
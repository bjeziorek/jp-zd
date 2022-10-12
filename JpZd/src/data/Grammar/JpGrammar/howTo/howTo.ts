import { oVerbFilter } from './../../../../utils/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { verbFormJp } from "../../../dictionary";
import { pickTheme } from '../../../../utils/pickTheme';

export function howTo(theme:Theme):DataType{
    const verb=rand(pickTheme('v','actions').filter(oVerbFilter))
    return{
        romaji:'Dou yatte kore-o '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ka?',
        meaning:'Jak to się '+verb.pl.os3
    }
}
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { Theme } from './../../../../types/Theme.model';
import { verbFormJp, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function ADoButBDoesnt(theme:Theme):DataType{
    const verb1 = rand(pickTheme('v','actions').filter(oVerbFilter))
    const item = rand(pickTheme('n','items'))
    const item2 = rand(pickTheme('n','items'))
    const who1 = rand(pickTheme('n',theme))
    
    return{
        romaji:who1.jp+'-wa '+item.jp+'-wa '+verbFormJp( verb1.jp.dictionaryForm,jpVerbFormsPool.masu)+'-ga '+item2.jp+'-wa '+verbFormJp( verb1.jp.dictionaryForm,jpVerbFormsPool.masen),
        meaning:who1.pl.M+' '+verb1.pl.os3 +' '+item.pl.B+', ale nie '+verb1.pl.os3+' '+item2.pl.D
    }
}
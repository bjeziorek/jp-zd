import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import DataType from '../../../../types/DataType.model';

export function nationality(theme: string): DataType {
    const who = rand(pickTheme(theme))
    const family = rand(pickTheme('anotherFamily'))
    const nationality = rand(pickTheme('nationality'))
   console.log(who,family,nationality)
    return {
        romaji: 'ano ' +family.jp+'-ga '+nationality.jp+' datta '+who.jp,
        meaning: ' Tamten/tamta/tamto ' + who.pl.M + ', którego/której '+family.pl.M+' był/a/o ' + nationality.pl.Msc
    }
}
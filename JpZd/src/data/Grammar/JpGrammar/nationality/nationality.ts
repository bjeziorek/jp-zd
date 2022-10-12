import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import DataType from '../../../../types/DataType.model';

export function nationality(theme: Theme): DataType {
    const who:NounStructure = rand(pickTheme('n',theme))
    const family:NounStructure = rand(pickTheme('n','anotherFamily'))
    const nationality:NounStructure = rand(pickTheme('n','nationality'))
   
    return {
        romaji: 'ano ' +family.jp+'-ga '+nationality.jp+' datta '+who.jp,
        meaning: ' Tamten/tamta/tamto ' + who.pl.M + ', którego/której '+family.pl.M+' był/a/o ' + nationality.pl.Msc
    }
}
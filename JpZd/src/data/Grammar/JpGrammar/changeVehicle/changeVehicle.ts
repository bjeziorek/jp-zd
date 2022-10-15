import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
export function changeVehicle(theme:Theme):DataType{
    const vehicle1:NounStructure=rand(pickTheme('n','vehicles'))
    const vehicle2:NounStructure=rand(pickTheme('n','vehicles'))
    const who:NounStructure=rand(pickTheme('n',theme))
    return{
        romaji:who.jp+'-wa '+vehicle1.jp+'-kara '+vehicle2.jp+'-ni norikaeru.',
        meaning:who.pl.M+' przesiada się z '+vehicle1.pl.D+' do '+vehicle2.pl.D+'.'
    }
}
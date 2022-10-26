import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { Theme } from "../../../../types/Theme.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function borrow(theme:Theme):DataType{
    const who1:NounStructure=rand(pickTheme('n',theme))
    const who2:NounStructure=rand(pickTheme('n','animals'))
    const what:NounStructure=rand(pickTheme('n','body'))
    return{
        romaji:who1.jp+'-wa '+who2.jp+'-kara '+what.jp+'-o kariru.',
        meaning:who1.pl.M+' pożyczył od '+who2.pl.D+' '+what.pl.B
    }
}
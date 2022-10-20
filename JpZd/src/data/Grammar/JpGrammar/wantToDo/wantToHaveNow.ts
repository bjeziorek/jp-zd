import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model"
import { Theme } from "../../../../types/Theme.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function wantToHaveNow(theme: Theme): DataType {
    const who:NounStructure=rand(pickTheme('n','professions'))
    const what:NounStructure=rand(pickTheme('n','items'))
    return {
        romaji:who.jp+'-wa '+what.jp+'-o hoshigatte imasu',
        meaning: who.pl.M+' chce mieć ' + what.pl.M
    }
}
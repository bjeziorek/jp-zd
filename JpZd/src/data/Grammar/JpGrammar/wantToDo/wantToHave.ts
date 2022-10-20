import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model"
import { Theme } from "../../../../types/Theme.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function wantToHave(theme: Theme): DataType {
    const what:NounStructure=rand(pickTheme('n','items'))
    return {
        romaji:what.jp+'-ga hoshii desu',
        meaning: 'Chcę mieć ' + what.pl.M
    }
}
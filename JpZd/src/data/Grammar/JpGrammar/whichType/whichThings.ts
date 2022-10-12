import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from '../../../../types/Noun.model'
import DataType from '../../../../types/DataType.model'
import { pickTheme } from '../../../../utils/pickTheme'
import rand from '../../../../utils/randomArrayElement'

export function whichThings(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const when:NounStructure=rand(pickTheme('n','week'))

    return {
        romaji:when.jp+'-ni donna koto-o ' +who.jp+'-wa shimasu-ka.',
        meaning:'W '+when.pl.B+' jakiego rodzaju rzeczy robi '+who.pl.M+'?'
    }
}
import { NounStructure } from '../../../../types/Noun.model'
import DataType from '../../../../types/DataType.model'
import { pickTheme } from '../../../../utils/pickTheme'
import rand from '../../../../utils/randomArrayElement'

export function whichThings(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const when:NounStructure=rand(pickTheme('week'))

    return {
        romaji:when.jp+'-ni donna koto-o ' +who.jp+'-wa shimasu-ka.',
        meaning:'W '+when.pl.B+' co robi '+who.pl.M+'?'
    }
}
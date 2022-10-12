import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from '../../../../types/Noun.model';
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export default function inLocation(theme:Theme){
    return(()=>{
        const noun:NounStructure=rand(pickTheme('n',theme))
        const place:NounStructure=rand(pickTheme('n','places'))
        const isLocated={
            jp:noun.isAlive?'imasu':'arimasu',
            pl:(noun.plGender==='mo'||noun.plGender==='mno')?'są':'jest'
        }
        return{
            romaji:place.jp+'-ni '+noun.jp+'-ga '+isLocated.jp+'.',
            meaning:'W '+place.pl.N+' '+isLocated.pl+ ' ' +noun.pl.M+'.'
        }
    })()
}
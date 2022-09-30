import { nouns,time} from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";

export function thinkThatNounNaAdj(theme:string):DataType{
    const tense = Math.random()>0.33?'past':(Math.random()>0.5?'present':'future')
    const when = rand(time[tense])
    const weather = rand(nouns.weather)
    const verbPl = (()=>{
        switch(tense){
            case 'past':return 'był'
            case 'present':return 'jest'
            case 'future':return 'będzie'
            default:
            console.log('unknown tense: ',tense)    
            return 'jest(?)'
        }
    })()

    return{
        romaji:when.jp+' '+weather.jp+'-da to omoimasu',
        meaning:'Myślę, że '+when.pl+' '+verbPl+' '+weather.pl.M
    }
}
import DataType from "../types/DataType.model"
import Tense, { TimePool } from "../types/Tense.model"
import { TenseSet } from "../types/Tense.model"
import { pickThemePool } from "../utils/pickTheme"
import rand from "../utils/randomArrayElement"

export function thisAdverb(theme:string){
    //todo s 93 - podpunkt 5
}

export function adverb(theme: string): DataType {
    const timePool: Array<TimePool> = [
        //present
        { jp: 'kyou', pl: 'dzisiaj', time: 'present' },
        //past
        { jp: 'kinou', pl: 'wczoraj', time: 'past' },
        { jp: 'ototoi', pl: 'przedwczoraj', time: 'past' },
        { jp: 'mae-no shuu', pl: 'w zeszłym tygodniu', time: 'past' },
        { jp: 'zengetsu', pl: 'w zeszłym miesiącu', time: 'past' },
        { jp: 'zennen', pl: 'w zeszłym roku', time: 'past' },
        //future
        { jp: 'ashita', pl: 'jutro', time: 'future' },
        { jp: 'asatte', pl: 'pojutrze', time: 'future' },
        { jp: 'raishuu', pl: 'w przyszłym tygodniu', time: 'future' },
        { jp: 'raigetsu', pl: 'w przyszłym miesiącu', time: 'future' },
        { jp: 'rainen', pl: 'w przyszłym roku', time: 'future' },
    ]
    const adverbsPool: Array<TenseSet> = [
        { jp: { past: 'katta', present: 'kau', future: 'kau', }, pl: { past: 'kupił', present: 'kupuje', future: 'kupi', } },
        { jp: { past: 'mita', present: 'miru', future: 'miru', }, pl: { past: 'widział', present: 'widzi', future: 'zobaczy', } },

    ]

    function verbGenderPl(verb:any,animal:any,time:any){
        console.log(verb.pl.past,noun.gender, time.time)
        if(time.time==='past'){
            switch(animal.plGender){
                case 'm': return verb.pl.past
                case 'ż': return verb.pl.past+'a'
                case 'n': return verb.pl.past+'a'
                case 'mo': return verb.pl.past+'?'
                case 'nmo': return verb.pl.past+'?'
                default: console.log('???')
                return verb.pl.past
            }
        }else{
            return verb.pl[time.time]
        }
    }

    const nounsPool = [
        { jp: 'hon', pl: 'książka', gender: 'ż' },
        { jp: 'eiga', pl: 'film', gender: 'm' },
        { jp: 'zasshi', pl: 'czasopismo', gender: 'n' },
    ]

    function adjectiveConjugation(adj:any,noun:any,time:any,language:string) {
       if(language==='pl'){
        switch(noun.gender){
            case'm':return adj.pl
            case 'ż':return adj.pl.slice(0, adj.pl.length - 1) + 'a'
            case 'n':return adj.pl.slice(0, adj.pl.length - 1) + 'e'
            case 'mo':return adj.pl + ' [todo]'
            case 'nmo': return adj.pl + ' [todo]'
            default:
                console.log('???')
                return adj.pl 
          }
    }else{//jp
        if(adj.iOrNa==='i'){
            if(time.time==='past'){
                return adj.jp.slice(0,adj.jp.length-1)+'tta'
            }else{
                return adj.jp
            }
        }else{
            if(time.time==='past'){
                return adj.jp+' deshita'
            }else{
                return adj.jp+' desu'
            }
        }
    }
    }

    const adjectivePool = [
        { jp: 'tsumaranai', pl: 'nudny',iOrNa:'i' },
        { jp: 'omoshiroi', pl: 'ciekawy',iOrNa:'i' },
        { jp: 'kirei', pl: 'piękny',iOrNa:'na' },
        { jp: 'minikui', pl: 'brzydki',iOrNa:'i' },
        { jp: 'tanoshii', pl: 'radosny' ,iOrNa:'i'},
        { jp: 'kanashii', pl: 'smutny' ,iOrNa:'i'},
        { jp: 'aenai', pl: 'rozczarowujący',iOrNa:'i' },
    ]

    function ktoryConj(gender: string) {
        switch (gender) {
            case 'ż': return 'którą'
            case 'm': return 'który'
            case 'n': return 'które'
        }
    }

    function be(time: string, gender: string) {
        switch (time) {
            case 'past':
                switch (gender) {
                    case 'm': return 'był'
                    case 'ż': return 'była'
                    case 'n': return 'było'
                    default: {
                        console.log('???')
                        return 'był'
                    }
                }
            case 'present': return 'jest'
            case 'future': return 'będzie'
            default:
                console.log("???")
                return 'jest'
        }
    }
    const animal = rand(pickThemePool(theme))
    const time: TimePool = rand(timePool)
    const adverb = rand(adverbsPool)
    const adj = rand(adjectivePool)
    const noun = rand(nounsPool)

    return {
        romaji: animal.jp+'-ga '+time.jp + ' ' + adverb.jp[time.time] + ' ' + noun.jp + '-wa ' +  adjectiveConjugation(adj, noun,time,'jp'),
        meaning: noun.pl + ', ' + ktoryConj(noun.gender) + ' ' + time.pl + ' ' +verbGenderPl(adverb,animal,time)+ ' '+animal.pl.M+' ' + be(time.time,noun.gender)+' '+ adjectiveConjugation(adj, noun,time,'pl')
    }
}
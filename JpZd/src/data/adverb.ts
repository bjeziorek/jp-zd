import DataType from "../types/DataType.model"
import Tense, { TimePool } from "../types/Tense.model"
import { TenseSet } from "../types/Tense.model"
import { pickTheme } from "../utils/pickTheme"
import rand from "../utils/randomArrayElement"

const timePool: Array<TimePool> = [ //podobna struktura jest w dictiopnary, ale tu na razie zostawiam
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

function verbGenderPl(verb: any, animal: any, time: any) {
    // console.log(verb.pl.past,noun.gender, time.time)
    if (time.time === 'past') {
        switch (animal.plGender) {
            case 'm': return verb.pl.past
            case 'ż': return verb.pl.past + 'a'
            case 'n': return verb.pl.past + 'a'
            case 'mo': return verb.pl.past + '?'
            case 'nmo': return verb.pl.past + '?'
            default: console.log('???')
                return verb.pl.past
        }
    } else {
        return verb.pl[time.time]
    }
}

const nounsPool = [
    { jp: 'hon', pl: 'książka', gender: 'ż' },
    { jp: 'eiga', pl: 'film', gender: 'm' },
    { jp: 'zasshi', pl: 'czasopismo', gender: 'n' },
]

function adjectiveConjugation(adj: any, noun: any, time: any, language: string,monoKoto:string) {
    if (language === 'pl') {
        switch (noun.gender) {
            case 'm': return adj.pl
            case 'ż': return adj.pl.slice(0, adj.pl.length - 1) + 'a'
            case 'n': return adj.pl.slice(0, adj.pl.length - 1) + 'e'
            case 'mo': return adj.pl + ' [todo]'
            case 'nmo': return adj.pl + ' [todo]'
            default:
                console.log('???')
                return adj.pl
        }
    } else {//jp
        if (adj.iOrNa === 'i') {
            if (time.time === 'past') {
                return adj.jp.slice(0, adj.jp.length - 1) + 'katta '+monoKoto+ ' desu'
            } else {
                return adj.jp+' '+monoKoto + ' desu'
            }
        } else {
            if (time.time === 'past') {
                return adj.jp + ' '+monoKoto+' deshita'
            } else {
                return adj.jp + ' '+monoKoto+ ' desu'
            }
        }
    }
}

const adjectivePool = [
    //    { jp: 'yoku wakarimasen', pl: 'niezrozumiały',iOrNa:'v' },
    { jp: 'hen', pl: 'dziwny', iOrNa: 'na' },
    { jp: 'warui', pl: 'zły', iOrNa: 'i' },
    { jp: 'tsumaranai', pl: 'nudny', iOrNa: 'i' },
    { jp: 'omoshiroi', pl: 'ciekawy', iOrNa: 'i' },
    { jp: 'kirei', pl: 'piękny', iOrNa: 'na' },
    { jp: 'minikui', pl: 'brzydki', iOrNa: 'i' },
    { jp: 'tanoshii', pl: 'radosny', iOrNa: 'i' },
    { jp: 'kanashii', pl: 'smutny', iOrNa: 'i' },
    { jp: 'aenai', pl: 'rozczarowujący', iOrNa: 'i' },
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
const thatPool: Array<TenseSet> = [
    { jp: { past: 'katta mono', present: 'kau mono', future: 'kau mono', }, pl: { past: 'to, co kupił', present: 'to, co kupuje', future: 'to, co kupi', } },
    { jp: { past: 'mita koto', present: 'miru koto', future: 'miru koto', }, pl: { past: 'to, co widział', present: 'to, co widzi', future: 'to, co zobaczy', } },
    { jp: { past: 'tabeta mono', present: 'taberu mono', future: 'taberu mono', }, pl: { past: 'to, co zjadł', present: 'to, co je', future: 'to, co zje', } },
    { jp: { past: 'shita koto', present: 'suru koto', future: 'suru koto', }, pl: { past: 'to, co zrobił', present: 'to, co robi', future: 'to, co zrobi', } },

]

export function thisAdverb(theme: string) {
    //todo s 93 - podpunkt 5

    const animal = rand(pickTheme(theme))
    const time: TimePool = rand(timePool)
    const adj = rand(adjectivePool)
    const that = rand(thatPool)
    const monoKoto=that.jp[time.time].match(/mono$/)?'mono':'koto'
    return {
        romaji: animal.jp + '-ga ' + time.jp + ' ' + that.jp[time.time] + '-wa ' + adjectiveConjugation(adj, { gender: 'n' }, time, 'jp',monoKoto),
        meaning: that.pl[time.time] + ' ' + time.pl + ' ' + animal.pl.M + ' ' + be(time.time, 'n') + ' ' + adjectiveConjugation(adj, { gender: 'n' }, time, 'pl',monoKoto)
    }
}

export function adverb(theme: string): DataType {
    const animal = rand(pickTheme(theme))
    const time: TimePool = rand(timePool)
    const adverb = rand(adverbsPool)
    const adj = rand(adjectivePool)
    const noun = rand(nounsPool)

    return {
        romaji: animal.jp + '-ga ' + time.jp + ' ' + adverb.jp[time.time] + ' ' + noun.jp + '-wa ' + adjectiveConjugation(adj, noun, time, 'jp',''),
        meaning: noun.pl + ', ' + ktoryConj(noun.gender) + ' ' + time.pl + ' ' + verbGenderPl(adverb, animal, time) + ' ' + animal.pl.M + ' ' + be(time.time, noun.gender) + ' ' + adjectiveConjugation(adj, noun, time, 'pl','')
    }
}
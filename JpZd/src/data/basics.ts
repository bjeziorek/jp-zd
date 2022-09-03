import { wordList, adjectives } from './dictionary';
import DataType from "../types/DataType.model"
import rand from "../utils/randomArrayElement"

export function basics(theme: string): DataType {
    const no = [
        { jp: 'kono', pl: 'ten tu' },
        { jp: 'sono', pl: 'ten tam' },
        { jp: 'ano', pl: 'tamten' }
    ]
    function setKonoGender(kono:string,gender:string){
        if(kono==='ten tu'||kono==='ten tam'){
            switch (gender) {
                case 'm': return kono
                case 'ż': return kono.replace(/^ten/,'ta')
                case 'n': return kono.replace(/^ten/,'to')
                case 'mo': return kono.replace(/^ten/,'ci')
                case 'nmo': return kono.replace(/^ten/,'te')
                default:
                    console.log('wrong gender: ', gender)
                    return kono
            }
        }
        if(kono==='tamten'){
            switch (gender) {
                case 'm': return kono
                case 'ż': return kono.replace(/ten&/,'ta')
                case 'n': return kono.replace(/ten&/,'to')
                case 'mo': return kono.replace(/ten&/,'ci')
                case 'nmo': return kono.replace(/ten&/,'te')
                default:
                    console.log('wrong gender: ', gender)
                    return kono
            }
        }
    }
    const re = [
        { jp: 'kore', pl: 'to koło mnie' },
        { jp: 'sore', pl: 'to koło ciebie' },
        { jp: 'are', pl: 'tam' }
    ]

    function setBeGenderTense(isPast: boolean, gender: string) {
        if (!isPast) return 'jest'
        switch (gender) {
            case 'm': return 'był'
            case 'ż': return 'była'
            case 'n': return 'było'
            case 'mo': return 'byli'
            case 'nmo': return 'były'
            default:
                console.log('wrong gender: ', gender)
                return 'był'
        }
    }

    function setBe(tense: string, negation: boolean) {


    }
    function setKoreKonoGender(gender: string, word: string) {
        return word
    }
    const isPast = Math.random() > 0.5 ? true : false
    const negative = Math.random() > 0.5 ? true : false
    const kono = rand(no)
    const kore = rand(re)

    const noun = rand(wordList.animals);
    const adj = rand(adjectives);
    const be = 'jest';

    return {
        romaji: kore.jp + '-wa ' + noun.jp + ' desu. ' + kono.jp + ' ' + noun.jp + '-wa ' + adj.jp,
        meaning: kore.pl + ' to jest ' + noun.pl.M + '. ' + setKonoGender( kono.pl,noun.plGender) + ' ' + noun.pl.M + ' ' + setBeGenderTense(isPast, noun.plGender) + ' ' + adj.pl
    }
}
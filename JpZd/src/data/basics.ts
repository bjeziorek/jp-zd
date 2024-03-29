import { VerbStructure } from './../types/Verb.model';
import { NounStructure } from './../types/Noun.model';
import { Theme } from './../types/Theme.model';
import { nouns, adjectives, declineAdjective, verbs, verbFormJp, jpVerbFormsPool } from './dictionary';
import DataType from "../types/DataType.model"
import rand from "../utils/randomArrayElement"
import { pickTheme } from '../utils/pickTheme';

const place=[
    {jp:'koko',pl:'tu (obok mnie)'},
    {jp:'soko',pl:'tu (obok ciebie)'},
    {jp:'asoko',pl:'tam'},
]

export function where(theme:Theme):DataType{
    const who=rand(pickTheme('n',theme))
    const dayOfWeek = rand(nouns.week)
    const verb=rand(verbs.move)
    const where=rand(place)
    return{
        romaji:who.jp+'-wa '+dayOfWeek.jp+'-ni doko-e '+verbFormJp( verb.jp.dictionaryForm,'masu')+'ka? '+where.jp+'-e '+verbFormJp( verb.jp.dictionaryForm,'masu'),
        meaning:'Gdzie '+verb.pl.os3+' '+who.pl.M+' w '+dayOfWeek.pl.B+'? '+verb.pl.os3+' '+where.pl
    }
}
export function withWho(theme:Theme):DataType{
    const who=rand(pickTheme('n',theme))
    const dayOfWeek = rand(nouns.week)
    const verb=rand(verbs.move)
    const where=rand(place)
    return{
        romaji:'Dare-to '+who.jp+'-wa '+dayOfWeek.jp+'-ni '+verbFormJp( verb.jp.dictionaryForm,'masu')+'ka? '+where.jp+'-e '+verbFormJp( verb.jp.dictionaryForm,'masu'),
        meaning:'Z kim '+verb.pl.os3+' '+who.pl.M+' w '+dayOfWeek.pl.B+'? '+verb.pl.os3+' '+where.pl
    }
}
export function when(theme:Theme):DataType{
    const who=rand(pickTheme('n',theme))
    const verb=rand(pickTheme('v','actions'))
    return{
        romaji:'Itsu '+who.jp+'-wa '+verbFormJp( verb.jp.dictionaryForm,'masu')+'ka?',//tu mozna dodac date np 13 marca o 14:00
        meaning:'Kiedy '+who.pl.M+' '+verb.pl.os3+'?'
    }
}
export function what(theme:Theme):DataType{
    const filteredVerbs=verbs.actions.filter(el=>{
        return el.jp.particle.includes('o')
    })
    console.log(verbs.actions,filteredVerbs)
    const who=rand(pickTheme('n',theme))
    const verb=rand(filteredVerbs)
    return{
        romaji:'Nani-o '+who.jp+'-wa '+verbFormJp( verb.jp.dictionaryForm,'masu')+'ka?',//tu mozna dodac date np 13 marca o 14:00
        meaning:'co '+verb.pl.os3+' '+who.pl.M+'?'
    }
}
export function genericPronoun(theme:Theme):DataType{
    const what = rand(pickTheme('n',theme))
    const adj = rand(pickTheme('a','all'))
    //uwaga tu z adjectivami - nie wiem jak uzyc z na-przym, czy odcinam czy co?
    const jaki=(()=>{
        switch(what.plGender){
            case 'm': return (what.isHuman)? 'jakiego':'jaki'
            case 'ż': return 'jaką'
            case 'n': return 'jakie'
            case 'mo': return (what.isHuman)? 'jakich':'jakie'
            case 'nmo': return 'jakie'
        }
    })()

    return{
        romaji:'Donna '+what.jp+'-o kaimashitaka? '+adj.jp+'-no-o kaimashita ',
        meaning:jaki+' '+what.pl.B+' kupiłeś? Kupiłem '+adj.pl
    }
}
export function polite(theme: Theme): DataType {

    const tense = Math.random() > 0.5 ? 'present' : 'past'
    const negation = Math.random() > 0.5 ? true : false
    const obj:NounStructure = rand(pickTheme('n',theme))
    const verb:VerbStructure = rand(verbs.actions)
    const form = (() => {
        if(tense==='present'){
            if(negation){
                return verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masen)
            }else{
                return verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masu)
            }
        }else{
            if(negation){
                return verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.masendeshita)
            }else{
                return verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.mashita)
            }
        }
    })()
    const nie=negation?'nie':''
    const pastPl=(tense==='past')?'ł':''

    return {
        romaji: obj.jp + '-wa ' + form,
        meaning: obj.pl.M+ ' '+nie+' ' +verb.pl.os3+pastPl
    }
}
export function chigaimasu(theme: Theme): DataType { //chigaimasu
    const a = rand(pickTheme('n',theme))
    const b = rand(pickTheme('n',theme))
    const neg = Math.random() > 0.5 ? false : true
    const answer = neg ? { jp: 'Iee, chigaimasu', pl: 'Nie, mylisz się' } : { jp: 'Hai, sou desu.', pl: 'Tak, zgadza się' }
    return {
        romaji: a.jp + '-wa ' + b.jp + ' desuka? ' + answer.jp,
        meaning: 'Czy ' + a.pl.M + ' jest ' + b.pl.N + '? ' + answer.pl
    }
}
export function basics(theme: Theme): DataType {
    const no = [
        { jp: 'kono', pl: 'ten (koło mnie)' },
        { jp: 'sono', pl: 'ten (koło ciebie)' },
        { jp: 'ano', pl: 'tamten' }
    ]
    function setKonoGender(kono: string, gender: string) {
        if (kono === 'ten (koło mnie)' || kono === 'ten (koło ciebie)') {
            switch (gender) {
                case 'm': return kono
                case 'ż': return kono.replace(/^ten/, 'ta')
                case 'n': return kono.replace(/^ten/, 'to')
                case 'mo': return kono.replace(/^ten/, 'ci')
                case 'nmo': return kono.replace(/^ten/, 'te')
                default:
                    console.log('wrong gender: ', gender)
                    return kono
            }
        }
        if (kono === 'tamten') {
            switch (gender) {
                case 'm': return kono
                case 'ż': return kono.replace(/ten&/, 'ta')
                case 'n': return kono.replace(/ten&/, 'to')
                case 'mo': return kono.replace(/ten&/, 'ci')
                case 'nmo': return kono.replace(/ten&/, 'te')
                default:
                    console.log('wrong gender: ', gender)
                    return kono
            }
        }
    }
    const re = [
        { jp: 'kore', pl: 'to (koło mnie)' },
        { jp: 'sore', pl: 'to (koło ciebie)' },
        { jp: 'are', pl: 'tamto to' }
    ]

    function setBeGenderTense(tense: string, gender: string) {
        if (tense === 'present') return 'jest'
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

    const tense = Math.random() > 0.5 ? 'past' : 'present'
    const negation = Math.random() > 0.5 ? true : false
    const r = rand([0, 1, 2])
    const kono = no[r]
    const kore = re[r]

    const noun = rand(nouns.animals);
    const adj = rand(adjectives);
    const neg = (negation) ? 'nie ' : ''

    return {
        romaji: kore.jp + '-wa ' + noun.jp + ' desu. ' + kono.jp + ' ' + noun.jp + '-wa ' + declineAdjective(adj, tense, negation),
        meaning: kore.pl + ' jest ' + noun.pl.M + '. ' + setKonoGender(kono.pl, noun.plGender) + ' ' + noun.pl.M + ' ' + neg + setBeGenderTense(tense, noun.plGender) + ' ' + adj.pl
    }
}
export function which(theme: Theme): DataType {

    const what = rand(nouns['animals'])

    return {
        romaji: what.jp + '-wa dore desuka',
        meaning: 'Który/a/e to ' + what.pl.M
    }
}
export function whichOfAny(theme: Theme): DataType {

    const animal = rand(nouns.animals)
    const profession = rand(nouns.professions)

    return {
        romaji: profession.jp + '-wa dono ' + animal.jp + ' desuka',
        meaning: 'Który z tych ' + animal.pl.D_pl + ' to ' + profession.pl.M
    }
}
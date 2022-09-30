import { verbFormJp, jpVerbFormsPool, verbs, nouns } from './dictionary';
import DataType from "../types/DataType.model";
import { pickTheme, pickVerb } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";
import { convertNumberToText } from './numbers';

//przeniesione
export function doWith(theme: string): DataType {
    console.log('in')
    const r = Math.floor(Math.random() * 12 + 1)
    const hour = { jp: convertNumberToText(r, 'ji') + '-ni', pl: 'o godzinie ' + r + ':00' }
    const who = rand(pickTheme(theme))
    const what = rand(pickTheme('items'))
    const what2 = rand(pickTheme('items'))
    const verb = rand(pickVerb('actions'))
    console.log(who, what, verb)
    return {
        romaji: hour.jp + ' ' + who.jp + '-wa ' + what.jp + '-de ' + what2.jp + '-o ' + verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.masu) + ' ne',
        meaning: hour.pl + ' ' + who.pl.M + ' ' + verb.pl.os3 + ' ' + what2.pl.B + ' za pomocą ' + what.pl.D + ', prawda?'
    }
}

export function goToWith(theme: string): DataType {
    const where = rand(nouns[theme])
    const moveVerb = rand(verbs.move)
    const who = rand(nouns[theme])
    const who2 = rand(nouns[theme])
    return {
        romaji: who.jp + '-wa ' + who2.jp + '-to ' + where.jp + '-e ' + verbFormJp(moveVerb.jp.dictionaryForm, jpVerbFormsPool.masu),
        meaning: who.pl.M + ' z(ze) ' + who2.pl.N + ' ' + moveVerb.pl.os3 + ' do ' + where.pl.D
    }
}
export function also(theme: string): DataType {
    const whom = rand(nouns.professions)
    const who = rand(nouns.animals)
    return {
        romaji: who.jp + '-mo ' + whom.jp + ' desu',
        meaning: who.pl.M + ' też jest ' + whom.pl.N
    }
}
export function AandB(theme: string): DataType {
    const whom = rand(nouns.professions)
    const whoA = rand(nouns.animals)
    const whoB = rand(nouns.animals)
    return {
        romaji: whoA.jp + '-to ' + whoB.jp + '-wa ' + whom.jp + ' desu',
        meaning: whoA.pl.M + ' i ' + whoB.pl.M + ' są ' + whom.pl.N_pl
    }
}
export function proposition1(theme: string): DataType {
    const verb1 = rand(pickVerb('actions'))
    return {
        romaji: verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.shou) + '. Ee, sou shimashou.',
        meaning: verb1.pl.rozkazujący + '! Dobrze, zróbmy to.'
    }
}
export function proposition2(theme: string): DataType {
    const verb1 = rand(pickVerb('actions'))
    return {
        romaji: verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.shou) + 'ka. Ee, ii desu ne.',
        meaning: 'Może będziemy ' + verb1.pl.niedokonany + '? Tak, dobrze.'
    }
}
export function twoVerbsAtOnce(theme: string): DataType {
    const who = rand(nouns[theme])
    const verb1 = rand(pickVerb('actions'))
    const verb2 = rand(pickVerb('actions'))
    return {
        romaji: who.jp + '-wa ' + verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.te) + ', ' + verb2.jp.dictionaryForm,
        meaning: who.pl.M + ' będzie ' + verb1.pl.niedokonany + ' i ' + verb2.pl.niedokonany
    }
}
export function twoVerbsOneByOne(theme: string): DataType {
    const who = rand(nouns[theme])
    const verb1 = rand(pickVerb('actions'))
    const verb2 = rand(pickVerb('actions'))
    return {
        romaji: who.jp + '-wa ' + verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.te) + '-kara, ' + verb2.jp.dictionaryForm,
        meaning: who.pl.M + ' będzie ' + verb1.pl.niedokonany + ', a potem ' + verb2.pl.niedokonany
    }
}
export function continues(theme: string): DataType {
    const animal = rand(nouns.animals)
    const verb = rand(pickVerb('actions'))
    return {
        romaji: 'Ima, ' + animal.jp + '-wa ' + verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.te) + "imasu",
        meaning: 'Teraz ' + animal.pl.M + ' ' + verb.pl.os3
    }
}
export function wayToDo(theme: string): DataType {
    const verb = rand(pickVerb('actions'))
    return {
        romaji: verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.masuBase) + " kata",
        meaning: 'Sposób ' + verb.pl.imieslowNiedokonany.replace(/(e się)$/, 'a się').replace(/(e)$/, 'a')
    }
}
export function wantToDo(theme: string): DataType {

    function taiForm(verb: string) {
        //exceptions
        if (verb === 'suru') {
            return 'shitai'
        }


        if (verb.match(/iru$|eru$/)) {
            return verb.slice(0, -2) + 'tai'
        } else {
            return verb.slice(0, -1) + 'itai'
        }

    }

    const what = rand(pickTheme(theme))
    const verb = rand(pickVerb('actions'))
    console.log(verb, what)
    return {
        romaji:/*what.jp + bar+ verb.particle.jp+' '+*/taiForm(verb.jp.dictionaryForm),
        meaning: 'Chcę ' + verb.pl.dokonany/*+' '+verb.particle.pl.txt+' '+what.pl[verb.particle.pl.case]*/
    }
}
export function give2(theme: string): DataType {

    const thingsPool = [
        { jp: ['tabemono', 'kuremasu'], pl: ['dał/a mi', 'jedzenie'] },
        { jp: ['nomimono', 'kuremasu'], pl: ['dał/a mi', 'picie'] },
        { jp: ['mizu', 'kuremasu'], pl: ['dał/a mi', 'wodę'] },
        { jp: ['KOOHII', 'kuremasu'], pl: ['dał/a mi', 'kawę'] },
        { jp: ['koucha', 'kuremasu'], pl: ['dał/a mi', 'czarną herbatę'] },
        { jp: ['ocha', 'kuremasu'], pl: ['dał/a mi', 'zieloną herbatę'] },
        { jp: ['hana', 'kuremasu'], pl: ['dał/a mi', 'kwiaty'] },
        { jp: ['okurimono', 'kuremasu'], pl: ['dał/a mi', 'prezent'] },
    ]

    const uchi = rand(pickTheme('myFamily'))
    const soto = rand(pickTheme('professions'))

    function person() {
        const isSoto = Math.random() > 0.5 ? true : false
        const who = isSoto ? soto : uchi
        return {
            isSoto,
            who
        }
    }

    const person1 = person()
    const person2 = person()
    const animal = rand(pickTheme('animals'))//Math.random()>0.5?theme:'family'))
    const verb = person2.isSoto ? 'agemasu' : 'kuremasu'

    return {
        romaji: person1.who.jp + '-wa ' + person2.who.jp + '-ni ' + animal.jp + '-o ' + verb,
        meaning: person1.who.pl.M + ' daje ' + person2.who.pl.C + ' ' + animal.pl.B
    }
    // return{
    //     romaji:animal1.jp+'-wa watashi-ni '+what.jp[0]+'-o '+what.jp[1],
    //     meaning:animal1.pl.M+' dał/a mi '+what.pl.B
    // }

}
export function receive(theme: string): DataType {

    const thingsPool = [
        { jp: ['tabemono', 'moraimashita'], pl: ['otrzymałem', 'jedzenie'] },
        { jp: ['nomimono', 'moraimashita'], pl: ['otrzymałem', 'picie'] },
        { jp: ['mizu', 'moraimashita'], pl: ['otrzymałem', 'wodę'] },
        { jp: ['KOOHII', 'moraimashita'], pl: ['otrzymałem', 'kawę'] },
        { jp: ['koucha', 'moraimashita'], pl: ['otrzymałem', 'czarną herbatę'] },
        { jp: ['ocha', 'moraimashita'], pl: ['otrzymałem', 'zieloną herbatę'] },
        { jp: ['hana', 'moraimashita'], pl: ['otrzymałem', 'kwiaty'] },
        { jp: ['okurimono', 'moraimashita'], pl: ['otrzymałem', 'prezent'] },
    ]

    const what = rand(thingsPool)
    const animal1 = rand(pickTheme(theme))//Math.random()>0.5?theme:'family'))

    return {
        romaji: 'Watashi-wa ' + animal1.jp + '-ni/kara ' + what.jp[0] + '-o ' + what.jp[1],
        meaning: 'Otrzymałem ' + what.pl[1] + ' od ' + animal1.pl.D
    }
}
export function give(theme: string): DataType {

    const placePool = [
        { jp: 'hako', pl: 'do pudełka' },
        { jp: 'kaban', pl: 'do torebki' },
        { jp: 'tsukue', pl: 'na biurko' },
        { jp: 'ginkou', pl: 'do banku' },
    ]
    const thingsPool = [
        { jp: ['tabemono', 'agemasu'], pl: ['daje', 'jedzenie'] },
        { jp: ['nomimono', 'agemasu'], pl: ['daje', 'picie'] },
        { jp: ['mizu', 'agemasu'], pl: ['daje', 'wodę'] },
        { jp: ['KOOHII', 'agemasu'], pl: ['daje', 'kawę'] },
        { jp: ['koucha', 'agemasu'], pl: ['daje', 'czarną herbatę'] },
        { jp: ['ocha', 'agemasu'], pl: ['daje', 'zieloną herbatę'] },
        { jp: ['nihongo', 'oshiemasu'], pl: ['uczy', 'japońskiego'] },
        { jp: ['POORANDO-go', 'oshiemasu'], pl: ['uczy', 'polskiego'] },
    ]


    // const giveOrplace = Math.random()>0.5?'give':'place'
    // const where = rand(giveOrplace==='give'?thingsPool:placePool)
    const what = rand(thingsPool)
    const animal1 = rand(pickTheme(theme))//Math.random()>0.5?theme:'family'))
    const animal2 = rand(pickTheme(theme))//Math.random()>0.5?theme:'family'))

    // słon daje kotu jedzenie
    // slon daje kota na stół
    return {
        romaji: animal2.jp + '-wa ' + animal1.jp + '-ni ' + what.jp[0] + '-o ' + what.jp[1],
        meaning: animal2.pl.M + ' ' + what.pl[0] + ' ' + animal1.pl[what.jp[1] === 'agemasu' ? 'C' : 'B'] + ' ' + what.pl[1]
    }
}
export function place() {
    //tak samo jak agemasu? MasaSensei #10
}

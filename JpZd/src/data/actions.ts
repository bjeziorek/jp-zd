import { VerbStructure } from './../types/Verb.model';
import { NounStructure } from './../types/Noun.model';
import { Theme } from './../types/Theme.model';
import { verbFormJp, jpVerbFormsPool, verbs, nouns } from './dictionary';
import DataType from "../types/DataType.model";
import { pickTheme } from "../utils/pickTheme";
import rand from "../utils/randomArrayElement";
import { convertNumberToText } from './numbers';

//przeniesione
export function doWith(theme: Theme): DataType {
    const r = Math.floor(Math.random() * 12 + 1)
    const hour = { jp: convertNumberToText(r, 'ji') + '-ni', pl: 'o godzinie ' + r + ':00' }
    const who:NounStructure = rand(pickTheme('n',theme))
    const what:NounStructure = rand(pickTheme('n','items'))
    const what2:NounStructure = rand(pickTheme('n','items'))
    const verb:VerbStructure = rand(pickTheme('n','actions'))
    return {
        romaji: hour.jp + ' ' + who.jp + '-wa ' + what.jp + '-de ' + what2.jp + '-o ' + verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.masu) + ' ne',
        meaning: hour.pl + ' ' + who.pl.M + ' ' + verb.pl.os3 + ' ' + what2.pl.B + ' za pomocą ' + what.pl.D + ', prawda?'
    }
}

export function goToWith(theme: Theme): DataType {
    const where:NounStructure = rand(pickTheme('n',theme))
    const moveVerb:VerbStructure = rand(pickTheme('v','move'))
    const who:NounStructure = rand(pickTheme('n',theme))
    const who2:NounStructure = rand(pickTheme('n',theme))
    return {
        romaji: who.jp + '-wa ' + who2.jp + '-to ' + where.jp + '-e ' + verbFormJp(moveVerb.jp.dictionaryForm, jpVerbFormsPool.masu),
        meaning: who.pl.M + ' z(ze) ' + who2.pl.N + ' ' + moveVerb.pl.os3 + ' do ' + where.pl.D
    }
}
export function also(theme: Theme): DataType {
    const whom:NounStructure = rand(pickTheme('n','professions'))
    const who:NounStructure = rand(pickTheme('n','animals'))
    return {
        romaji: who.jp + '-mo ' + whom.jp + ' desu',
        meaning: who.pl.M + ' też jest ' + whom.pl.N
    }
}
export function AandB(theme: Theme): DataType {
    const whom:NounStructure = rand(pickTheme('n','professions'))
    const whoA:NounStructure = rand(pickTheme('n','animals'))
    const whoB:NounStructure = rand(pickTheme('n','animals'))
    return {
        romaji: whoA.jp + '-to ' + whoB.jp + '-wa ' + whom.jp + ' desu',
        meaning: whoA.pl.M + ' i ' + whoB.pl.M + ' są ' + whom.pl.N_pl
    }
}
export function proposition1(theme: Theme): DataType {
    const verb1:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji: verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.shou) + '. Ee, sou shimashou.',
        meaning: verb1.pl.rozkazujący + '! Dobrze, zróbmy to.'
    }
}
export function proposition2(theme: Theme): DataType {
    const verb1:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji: verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.shou) + 'ka. Ee, ii desu ne.',
        meaning: 'Może będziemy ' + verb1.pl.niedokonany + '? Tak, dobrze.'
    }
}
export function twoVerbsAtOnce(theme: Theme): DataType {
    const who:NounStructure = rand(pickTheme('n',theme))
    const verb1:VerbStructure = rand(pickTheme('v','actions'))
    const verb2:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji: who.jp + '-wa ' + verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.te) + ', ' + verb2.jp.dictionaryForm,
        meaning: who.pl.M + ' będzie ' + verb1.pl.niedokonany + ' i ' + verb2.pl.niedokonany
    }
}
export function twoVerbsOneByOne(theme: Theme): DataType {
    const who = rand(pickTheme('n',theme))
    const verb1 = rand(pickTheme('v','actions'))
    const verb2 = rand(pickTheme('v','actions'))
    return {
        romaji: who.jp + '-wa ' + verbFormJp(verb1.jp.dictionaryForm, jpVerbFormsPool.te) + '-kara, ' + verb2.jp.dictionaryForm,
        meaning: who.pl.M + ' będzie ' + verb1.pl.niedokonany + ', a potem ' + verb2.pl.niedokonany
    }
}
export function continues(theme: Theme): DataType {
    const animal:NounStructure = rand(pickTheme('n','animals'))
    const verb:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji: 'Ima, ' + animal.jp + '-wa ' + verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.te) + "imasu",
        meaning: 'Teraz ' + animal.pl.M + ' ' + verb.pl.os3
    }
}
export function wayToDo(theme: Theme): DataType {
    const verb:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji: verbFormJp(verb.jp.dictionaryForm, jpVerbFormsPool.masuBase) + " kata",
        meaning: 'Sposób ' + (verb.pl.imieslowNiedokonany as string).replace(/(e się)$/, 'a się').replace(/(e)$/, 'a')
    }
}
export function wantToDo(theme: Theme): DataType {

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

    const what:NounStructure = rand(pickTheme('n',theme))
    const verb:VerbStructure = rand(pickTheme('v','actions'))
    return {
        romaji:/*what.jp + bar+ verb.particle.jp+' '+*/taiForm(verb.jp.dictionaryForm),
        meaning: 'Chcę ' + verb.pl.dokonany/*+' '+verb.particle.pl.txt+' '+what.pl[verb.particle.pl.case]*/
    }
}
export function give2(theme: Theme): DataType {

    const uchi:NounStructure = rand(pickTheme('n','myFamily'))
    const soto:NounStructure = rand(pickTheme('n','professions'))

    type Person={
        isSoto:boolean,
        who:NounStructure
    }

    function person():Person {
        const isSoto = Math.random() > 0.5 ? true : false
        const who = isSoto ? soto : uchi
        return {
            isSoto,
            who
        }
    }

    const person1:Person = person()
    const person2:Person = person()
    const animal:NounStructure = rand(pickTheme('n','animals'))//Math.random()>0.5?theme:'family'))
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
export function receive(theme: Theme): DataType {

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
    const animal1 = rand(pickTheme('n',theme))//Math.random()>0.5?theme:'family'))

    return {
        romaji: 'Watashi-wa ' + animal1.jp + '-ni/kara ' + what.jp[0] + '-o ' + what.jp[1],
        meaning: 'Otrzymałem ' + what.pl[1] + ' od ' + animal1.pl.D
    }
}
export function give(theme: Theme): DataType {

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
    const animal1 = rand(pickTheme('n',theme))//Math.random()>0.5?theme:'family'))
    const animal2 = rand(pickTheme('n',theme))//Math.random()>0.5?theme:'family'))

    // słon daje kotu jedzenie
    // slon daje kota na stół
    return {
        romaji: animal2.jp + '-wa ' + animal1.jp + '-ni ' + what.jp[0] + '-o ' + what.jp[1],
        meaning: animal2.pl.M + ' ' + what.pl[0] + ' ' + animal1.pl[what.jp[1] === 'agemasu' ? 'C' : 'B'] + ' ' + what.pl[1]
    }
}

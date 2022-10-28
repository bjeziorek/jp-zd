import Adjective, { AdjectiveStructure } from './../types/Adjective.model';
import { VerbStructure } from './../types/Verb.model';
import { Pronoun } from './../types/Pronoun.model';
import { Case } from './../types/Case.model';
import Kanji from "../types/Kanji.model"
import Noun from '../types/Noun.model';
import Numbers from '../types/Numbers.model';
import Verb from '../types/Verb.model';
import { init } from '../init/init';
import { WhichPl } from '../types/WhichPl.model';
import { Time } from '../types/Time.model';
import { VerbForm } from '../types/VerbForm.model';

export function testowa(x: number, y: number): number {
    return x + y
}
export default function dictionary() {
    return 0
}
function dictOutput(dict: any, key: string, trans: string) {
    const filtered = (dict).filter((el: any) => { return el.key === key && el.translation.pl === trans })
    if (filtered[0]) {
        if (filtered[0].kanji === '-') {
            return filtered[0].kana
        } else {
            return filtered[0].kanji
        }
    } else {
        return "brak wyniku dla: " + key + " i " + trans
    }
}
export function kanjiDict(meaning: string) {

    const kanji: Array<Kanji> = [
        {
            meaning: { pl: 'za' },
            kanji: '後',
            kunyomi: ['うし‐ろ', 'あと', '+'],
            onyomi: ['ゴ', '+']
        },
        {
            meaning: { pl: 'mysz' },
            kanji: '鼠',
            kunyomi: ['ねずみ', '+'],
            onyomi: ['ソ', '+']
        },
        {
            meaning: { pl: 'kwiat' },
            kanji: '花',
            kunyomi: ['はな'],
            onyomi: ['カ', 'ケ']
        },
        {
            meaning: { pl: 'pszczoła' },
            kanji: '蜂',
            kunyomi: ['はち'],
            onyomi: ['ホウ']
        },
        {
            meaning: { pl: 'miód' },
            kanji: '蜜',
            kunyomi: ['-'],
            onyomi: ['ミツ', 'ビツ']
        },
    ]
    const result = kanji.filter((el: Kanji) => { return el.meaning.pl === meaning })
    //console.log(result)
    return result[0]
}
let caseType = {
    'nie ma | przyglądam się | widzę | z | o | o!': '',
    'a u a em /cie /cie': 'a u a em /cie /cie',
    'y /ie /ę /ą /ie /o': 'y /ie /ę /ą /ie /o',
    'y y x ą y o': 'y y x ą y o',
    'a owi a em ze ze': 'a owi a em ze ze',
    '(ą->ę) ia iowi ia iem iu iu': '(ą->ę) ia iowi ia iem iu iu',
    '(e->x) a owi a em u u': '(e->x) a owi a em u u',
    'a owi a iem u u': 'a owi a iem u u',
    'ia iowi ia iem iu iu': 'ia iowi ia iem iu iu',
    'a owi a em u u': 'a owi a em u u',
    '/y /ze /ę /ą /ze /o': '/y /ze /ę /ą /ze /o',
    '/y /sze /ę /ą /sze /o': '/y /sze /ę /ą /sze /o',
    '/i /ce /ę /ą /ce /o': '/i /ce /ę /ą /ce /o',
    '(e->x) a u a em ie ie': '(e->x) a u a em ie ie',
    '/y /y /ę /ą /y /o': '/y /y /ę /ą /y /o',
    '(ź->z) ia iowi ia iem iu iu': '(ź->z) ia iowi ia iem iu iu',
    '(ń->n) ia iowi ia iem iu iu': '(ń->n) ia iowi ia iem iu iu',
    '/ / /ę /ą / /o': '/ / /ę /ą / /o',
    'a owi a em ie ie': 'a owi a em ie ie',
    '/y /ie /ę /ą /ie /o': '/y /ie /ę /ą /ie /o',
    '()()((l)) a owi a em e e': '()()((l)) a owi a em e e',
    '(ie->x) a u a em ie ie': '(ie->x) a u a em ie ie',
}
export function caseDeclination(word: string): Case {
    //    console.log('......................',word)
    /// declineAdjective('', '')
    const vowel = /[aieouyęą]/;
    const lastLetter = word.slice(-1)
    const secondLastLetter = word.slice(-2, -1)
    const thirdLastLetter = word.slice(-3, -2)
    const endD = secondLastLetter === 'k' ? 'i' : 'y'
    const endC =
        (secondLastLetter === 'k' ||
            secondLastLetter === 'h' || //czy istanieje inny przypadek niż ch? może się zdarzyć samo h? jak tak to może nie zadziałać
            secondLastLetter === 'r')
            ? word.slice(-3, -1).replace(/k$/, 'c').replace('ch', 'sz').replace(/r$/, 'rz') + 'e'
            : word.slice(-3, -1) + 'ie'
    const EndMsc = endC

    //   console.log(word, lastLetter, secondLastLetter, endD)

    let wordObj: Case;
    //typ 1
    if (lastLetter === 'a' &&  // ostatnia litera a (większość) - typ 1: i/y e/ie ę ą e o
        secondLastLetter !== 'i' &&
        secondLastLetter !== 'c') {
        const wordObj = {
            M: word,//jest ryba
            D: word.slice(0, word.length - 1) + endD, // nie ma ryb/-y
            C: word.slice(0, word.length - 3) + endC, //przyglądam się ryb/-ie
            B: word.slice(0, word.length - 1) + 'ę', //widzę ryb/-ę
            N: word.slice(0, word.length - 1) + 'ą', //z ryb/-ą
            Msc: word.slice(0, word.length - 3) + EndMsc, //o ryb/-ie
            W: word.slice(0, word.length - 1) + 'o', //o! ryb/-o
            M_pl: word.slice(0, -1) + 'y',//są ryb/-y
            D_pl: word,// nie ma ryb
            C_pl: word.slice(0, word.length - 3) + 'om', //przyglądam się ryb/-om
            B_pl: word.slice(0, word.length - 1) + 'y', //widzę ryb/-y
            N_pl: word.slice(0, word.length - 1) + 'ami', //z ryb/-ami
            Msc_pl: word.slice(0, word.length - 3) + 'ach', //o ryb/-ach
            W_pl: word.slice(0, word.length - 1) + 'y', //o! ryb/-y

        }
        //     console.log('typ1', wordObj)
        return wordObj
    }
    //typ 2
    if (  // - typ 2a: a owi a em u u
        (secondLastLetter.match(vowel) &&
            lastLetter.match(/[lżkbń]/)) ||
        word.slice(-3) === 'ółw' ||
        (thirdLastLetter.match(vowel) &&
            word.slice(-2).match(/dź|rz|lk/)) ||
        word === 'wróbel') {

        const wordObj = {
            M: word,//jest krokodyl, niedźwiedź, łabędź, koń, wróbel
            D: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'a', // nie ma krokodyl-a
            C: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'owi', //przyglądam się krokodyl-owi
            B: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'a', //widzę krokodyl-a
            N: word.replace(/k$/, 'ki').replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'em', //z krokodyl-em
            Msc: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'u', //o krokodyl-u
            W: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'u', //o! krokodyl-u 
            M_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'e',//są krokodyl-e
            D_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'i',// nie ma krokodyli
            C_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'om', //przyglądam się krokodyl/-om
            B_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'e', //widzę krokodyl/-e
            N_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'ami', //z krokodyl/-ami
            Msc_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'ach', //o krokodyl/-ach
            W_pl: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'e', //o! krokodyl/-e

        }
        //   console.log('typ2a', wordObj)
        return wordObj
    }
    //typ 2b
    if (  // - typ 2b: a owi a em e e
        word !== 'pies' && ((secondLastLetter.match(vowel) &&
            lastLetter.match(/[nsr]/)) ||

            (thirdLastLetter.match(vowel) && word.match(/nt$/)) ||
            word.match(/orzeł/))) {

        const wordObj = {
            M: word,//jest lis
            D: word.replace('orzeł', 'orł') + 'a', // nie ma lis-a
            C: word.replace('orzeł', 'orł') + 'owi', //przyglądam się lis-owi
            B: word.replace('orzeł', 'orł') + 'a', //widzę lis-a
            N: word.replace('orzeł', 'orł') + 'em', //z lis-em
            Msc: word.replace(/s$/, 'si').replace(/n$/, 'ni').replace(/r$/, 'rz').replace(/t$/, 'ci').replace('orzeł', 'orl') + 'e', //o lis-ie , komar-ze, pingwin-ie
            W: word.replace(/s$/, 'si').replace(/n$/, 'ni').replace(/r$/, 'rz').replace(/t$/, 'ci').replace('orzeł', 'orl') + 'e', //o! lis-ie 
            M_pl: word + 'y',//są lis/-y
            D_pl: word + 'ów',// nie ma lis-ów
            C_pl: word + 'om', //przyglądam się lis/-om
            B_pl: word + 'y', //widzę lis/-y
            N_pl: word + 'ami', //z lis/-ami
            Msc_pl: word + 'ach', //o lis/-ach
            W_pl: word + 'y', //o! lis/-y

        }
        // console.log('typ2b ------ ', wordObj)
        return wordObj
    }
    //typ 3
    if (  // - typ 3: a u a em e e
        ((secondLastLetter.match(vowel) && word.match(/t$/)) ||
            word.match(/lew|pies/))) {

        const wordObj = {
            M: word,//jest kot
            D: word.replace('lew', 'lw').replace('pies', 'ps') + 'a', // nie ma kot-a
            C: word.replace('lew', 'lw').replace('pies', 'ps') + 'u', //przyglądam się kot-u
            B: word.replace('lew', 'lw').replace('pies', 'ps') + 'a', //widzę kot-a
            N: word.replace('lew', 'lw').replace('pies', 'ps') + 'em', //z kot-em
            Msc: word.replace('lew', 'lw').replace('pies', 'ps').replace(/t$/, 'c') + 'ie', //o ko/[c]-ie
            W: word.replace('lew', 'lw').replace('pies', 'ps').replace(/t$/, 'c') + 'ie', //o! ko/[c]-ie 
            M_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'y',//są kot/-y
            D_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'ów',// nie ma kot-ów
            C_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'om', //przyglądam się kot/-om
            B_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'y', //widzę kot/-y
            N_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'ami', //z kot/-ami
            Msc_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'ach', //o kot/-ach
            W_pl: word.replace('lew', 'lw').replace('pies', 'ps') + 'y', //o! kot/-y
        }
        //console.log('typ3', wordObj)
        return wordObj
    }

    //typ - -ca
    if (  // - typ '/y /y /ę /ą /y /o'
        (word.match(/ca$/))) {

        const wordObj = {
            M: word,//jest owca
            D: word.slice(0, -1) + 'y', // nie ma owc/-y
            C: word.slice(0, -1) + 'y', //przyglądam się owc/-y
            B: word.slice(0, -1) + 'ę', //widzę owc/-ę
            N: word.slice(0, -1) + 'ą', //ze owc/-ą
            Msc: word.slice(0, -1) + 'y', //o owc/-y
            W: word.slice(0, -1) + 'o', //o! owc/-o
            M_pl: word.slice(0, -1) + 'y',//są owc/-e
            D_pl: word.slice(0, -1).replace(/c$/, 'iec'),// nie ma ow(ie)c
            C_pl: word.slice(0, -1) + 'om', //przyglądam się owc/-om
            B_pl: word.slice(0, -1) + 'e', //widzę owc/-e
            N_pl: word.slice(0, -1) + 'ami', //z owc/-ami
            Msc_pl: word.slice(0, -1) + 'ach', //o owc/-ach
            W_pl: word.slice(0, -1) + 'e', //o! owc/-e

        }
        //console.log('typ -ca', wordObj)
        return wordObj
    }


    //typ - -nia
    if (  // - typ '/ / /ę /ą / /o'
        (word.match(/nia$|yni$/))) {

        const wordObj = {
            M: word,//jest świania
            D: word.replace(/a$/, ''), // nie ma świni/
            C: word.replace(/a$/, ''), //przyglądam się świni/
            B: word.replace(/a$/, '') + 'ę', //widzę świni/-ę
            N: word.replace(/a$/, '') + 'ą', //ze świni/-ą
            Msc: word.replace(/a$/, ''), //o świni/
            W: word.replace(/a$/, '') + 'o', //o! świni/-o
            M_pl: word.slice(0, -1) + 'y',//są świni/-e
            D_pl: word.slice(0, -2).replace(/n$/, 'ń'),// nie ma świ(ń)/
            C_pl: word.slice(0, -1) + 'om', //przyglądam się świni/-om
            B_pl: word.slice(0, -1) + 'e', //widzę świni/-e
            N_pl: word.slice(0, -1) + 'ami', //z świni/-ami
            Msc_pl: word.slice(0, -1) + 'ach', //o świni/-ach
            W_pl: word.slice(0, -1) + 'e', //o! świni/-e

        }
        //console.log('typ -nia/-yni', wordObj)
        return wordObj
    }

    //typ - mysz
    if (  // - typ 'y y x ą y o'
        (word.match(/mysz/))) {

        const wordObj = {
            M: word,//jest mysz
            D: word + 'y', // nie ma mysz-y
            C: word + 'y', //przyglądam się myszy
            B: word, //widzę mysz
            N: word + 'ą', //z mysz-ą
            Msc: word + 'y', //o mysz-y
            W: word + 'o', //o! mysz-o
            M_pl: word + 'y',//są mysz-y
            D_pl: word + 'y',// nie ma mysz+y
            C_pl: word + 'om', //przyglądam się mysz-om
            B_pl: word + 'e', //widzę mysz+y
            N_pl: word + 'ami', //z mysz-ami
            Msc_pl: word + 'ach', //o mysz-ach
            W_pl: word + 'y', //o! mysz-y

        }
        //console.log('typ mysz', wordObj)
        return wordObj
    }

    //default

    const wordObj2 = {
        M: word,
        D: word,
        C: word,
        B: word,
        N: word,
        Msc: word,
        W: word,
        M_pl: word,
        D_pl: word,
        C_pl: word,
        B_pl: word,
        N_pl: word,
        Msc_pl: word,
        W_pl: word,
    }
    //    console.log('unknown case pattern for: ' + word, wordObj2)
    return wordObj2
}
function caseDeclination_deprecated(type: number | string, word: string): Case {
    //jak kot
    switch (type) {
        case caseType['a u a em /cie /cie']:
            //kot
            return {
                M: word, //jest kot
                D: word + 'a', // nie ma kot-a
                C: word + 'u', //przyglądam się kot-u
                B: word + 'a', //widzę kot-a
                N: word + 'em', //idę z kot-em
                Msc: word.slice(0, word.length - 1) + 'cie', //myślę o ko/-cie
                W: word.slice(0, word.length - 1) + 'cie', //o! witaj ko/-cie
                M_pl: word + 'y', //są kot-y
                D_pl: word + 'ów', // nie ma kot-ów
                C_pl: word + 'om', //przyglądam się kot-om
                B_pl: word + 'y', //widzę kot-y
                N_pl: word + 'ami', //idę z kot-ami
                Msc_pl: word + 'ach', //myślę o kot-ach
                W_pl: word + 'y', //o! witajcie kot-y
            }
        case caseType['y /ie /ę /ą /ie /o']:
            //ryba
            return {
                M: word,//jest ryba
                D: word.slice(0, word.length - 1) + 'y', // nie ma ryb/-y
                C: word.slice(0, word.length - 1) + 'ie', //przyglądam się ryb/-ie
                B: word.slice(0, word.length - 1) + 'ę', //widzę ryb/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z ryb/-ą
                Msc: word.slice(0, word.length - 1) + 'ie', //o ryb/-ie
                W: word.slice(0, word.length - 1) + 'o', //o! ryb/-o
            }
        case caseType['y y x ą y o']:
            //mysz
            return {
                M: word,//jest mysz
                D: word + 'y', // nie ma mysz-y
                C: word + 'y', //przyglądam się myszy
                B: word, //widzę mysz
                N: word + 'ą', //z mysz-ą
                Msc: word + 'y', //o mysz-y
                W: word + 'o', //o! mysz-o
            }
        case caseType['a owi a em ze ze']:
            //komar
            return {
                M: word,//jest komar
                D: word + 'a', // nie ma komar-a
                C: word + 'owi', //przyglądam się komar-owi
                B: word + 'a', //widzę komar-a
                N: word + 'em', //z komar-em
                Msc: word + 'ze', //o komar-ze
                W: word + 'ze', //o! komar-ze
            }
        case caseType['(ą->ę) ia iowi ia iem iu iu']:
            //gołąb
            return {
                M: word,// jest gołąb
                D: word.replace('ą', 'ę') + 'ia', // nie ma goł|ę|b-ia
                C: word.replace('ą', 'ę') + 'iowi', // przyglądam się goł|ę|b-iowi
                B: word.replace('ą', 'ę') + 'ia', // widzę goł|ę|b-ia
                N: word.replace('ą', 'ę') + 'iem', // z goł|ę|b-iem
                Msc: word.replace('ą', 'ę') + 'iu', //o goł|ę|b-iu
                W: word.replace('ą', 'ę') + 'iu', //o! goł|ę|b-iu
            }
        case caseType['(e->x) a owi a em u u']:
            //wróbel
            return {
                M: word,// jest wróbel
                D: word.replace('e', '') + 'a', // nie ma wrób()l-a
                C: word.replace('e', '') + 'owi', // przyglądam się wrób()l-owi
                B: word.replace('e', '') + 'a', // widzę ma wrób()l-a
                N: word.replace('e', '') + 'em', // z wrób()l-em
                Msc: word.replace('e', '') + 'u', //o wrób()l-u
                W: word.replace('e', '') + 'u', //o! wrób()l-u
            }
        case caseType['(ń->n) ia iowi ia iem iu iu']:
            //słoń
            return {
                M: word,//jest słoń
                D: word.replace(/.$/, "n") + 'ia', // nie ma sło|n|-ia
                C: word.replace(/.$/, "n") + 'iowi', //przyglądam się sło|n|-iowi
                B: word.replace(/.$/, "n") + 'ia', //widzę sło|n|-ia
                N: word.replace(/.$/, "n") + 'iem', //ze sło|n|-iem
                Msc: word.replace(/.$/, "n") + 'iu', //o sło|n|-iu
                W: word.replace(/.$/, "n") + 'iu', //o! sło|n|-iu
            }

        case caseType['(ź->z) ia iowi ia iem iu iu']:
            //słoń
            return {
                M: word,//jest słoń
                D: word.replace(/.$/, "z") + 'ia', // nie ma sło|n|-ia
                C: word.replace(/.$/, "z") + 'iowi', //przyglądam się sło|n|-iowi
                B: word.replace(/.$/, "z") + 'ia', //widzę sło|n|-ia
                N: word.replace(/.$/, "z") + 'iem', //ze sło|n|-iem
                Msc: word.replace(/.$/, "z") + 'iu', //o sło|n|-iu
                W: word.replace(/.$/, "z") + 'iu', //o! sło|n|-iu
            }
        case caseType['a owi a em u u']:
            //krokodyl
            return {
                M: word,//jest krokodyl
                D: word + 'a', // nie ma krokodyl-a
                C: word + 'owi', //przyglądam się krokodyl-owi
                B: word + 'a', //widzę krokodyl-a
                N: word + 'em', //z krokodyl-em
                Msc: word + 'u', //o krokodyl-u
                W: word + 'u', //o! krokodyl-u
            }
        case caseType['a owi a iem u u']:
            //ptak
            return {
                M: word,//jest ptak
                D: word + 'a', // nie ma ptaka-a
                C: word + 'owi', //przyglądam się ptak-owi
                B: word + 'a', //widzę ptak-a
                N: word + 'iem', //z ptak-iem
                Msc: word + 'u', //o ptak-u
                W: word + 'u', //o! ptaku-u
            }
        case caseType['ia iowi ia iem iu iu']:
            //żółw
            return {
                M: word,//jest żółw
                D: word + 'ia', // nie ma żółw-ia
                C: word + 'iowi', //przyglądam się żółw-iowi
                B: word + 'ia', //widzę żółw-ia
                N: word + 'iem', //z żółw-iem
                Msc: word + 'iu', //o żółw-iu
                W: word + 'iu', //o! żółw-iu
            }
        case caseType['/y /ie /ę /ą /ie /o']://sarna
            return {
                M: word,//jest sarna
                D: word.slice(0, word.length - 1) + 'y', // nie ma sarn/-y
                C: word.slice(0, word.length - 1) + 'ie', //przyglądam się sarn/-ie
                B: word.slice(0, word.length - 1) + 'ę', //widzę sarn/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z sarn/-ą
                Msc: word.slice(0, word.length - 1) + 'ie', //o sarn/-ie
                W: word.slice(0, word.length - 1) + 'o', //o! sarn/-o
            }
        case caseType['/y /sze /ę /ą /sze /o']://mucha
            return {
                M: word,//jest mucha
                D: word.slice(0, word.length - 1) + 'y', // nie ma much/-y
                C: word.slice(0, word.length - 3) + 'sze', //przyglądam się mu/-sze
                B: word.slice(0, word.length - 1) + 'ę', //widzę much/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z much/-ą
                Msc: word.slice(0, word.length - 3) + 'sze', //o mu/-sze
                W: word.slice(0, word.length - 1) + 'o', //o! much/-o
            }
        case caseType['/y /ze /ę /ą /ze /o']:
            //kura
            return {
                M: word,//jest kura
                D: word.slice(0, word.length - 1) + 'y', // nie ma kur/-y
                C: word.slice(0, word.length - 1) + 'ze', //przyglądam się kur/-ze
                B: word.slice(0, word.length - 1) + 'ę', //widzę kur/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z kur/-ą
                Msc: word.slice(0, word.length - 1) + 'ze', //o kur/-ze
                W: word.slice(0, word.length - 1) + 'o', //o! kur/-o
            }
        case caseType['/i /ce /ę /ą /ce /o']:
            //mrówka
            return {
                M: word,//jest mrówka
                D: word.slice(0, word.length - 1) + 'i', // nie ma mrówk/-i
                C: word.slice(0, word.length - 2) + 'ce', //przyglądam się mrów//-ce
                B: word.slice(0, word.length - 1) + 'ę', //widzę mrówk/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z mrówk/-ą
                Msc: word.slice(0, word.length - 2) + 'ce', //o mrów//-ce
                W: word.slice(0, word.length - 1) + 'o', //o! mrówk/-o
            }
        case caseType['(e->x) a u a em ie ie']:
            //lew
            return {
                M: word,//jest lew
                D: word.replace('e', '') + 'a', // nie ma l()w-a
                C: word.replace('e', '') + 'u', //przyglądam się l()w-u
                B: word.replace('e', '') + 'a', //widzę l()w-a
                N: word.replace('e', '') + 'em', //z l()w-em
                Msc: word.replace('e', '') + 'ie', //o l()w-ie
                W: word.replace('e', '') + 'ie', //o! l()w-ie
            }
        case caseType['(ie->x) a u a em ie ie']://pies
            return {
                M: word,//jest pies
                D: word.replace('ie', '') + 'a', // nie ma p()()s-a
                C: word.replace('ie', '') + 'u', //przyglądam się p()()s-u
                B: word.replace('ie', '') + 'a', //widzę p()()s-a
                N: word.replace('ie', '') + 'em', //z p()()s-em
                Msc: word.replace('ie', '') + 'ie', //o p()()s-ie
                W: word.replace('ie', '') + 'ie', //o! p()()s-ie
            }

        case caseType['/y /y /ę /ą /y /o']: //owca
            return {
                M: word,//jest owca
                D: word.slice(0, word.length - 1) + 'y', // nie ma owc/-y
                C: word.slice(0, word.length - 1) + 'y', //przyglądam się owc/-y
                B: word.slice(0, word.length - 1) + 'ę', //widzę owc/-ę
                N: word.slice(0, word.length - 1) + 'ą', //z owc/-ą
                Msc: word.slice(0, word.length - 1) + 'y', //o owc/-y
                W: word.slice(0, word.length - 1) + 'o', //o! owc-o
            }
        case caseType['/ / /ę /ą / /o']: //świnia
            return {
                M: word,//jest świnia
                D: word.slice(0, word.length - 1), // nie ma świni/
                C: word.slice(0, word.length - 1), //przyglądam się świni/
                B: word.slice(0, word.length - 1) + 'ę', //widzę świni/-ę
                N: word.slice(0, word.length - 1) + 'ą', //ze świni/-ą
                Msc: word.slice(0, word.length - 1), //o świni/
                W: word.slice(0, word.length - 1) + 'o', //o! świni/-o
            }
        case caseType['a owi a em ie ie']: //pingwin
            return {
                M: word,//jest pingwin
                D: word + 'a', // nie ma pingwin-a
                C: word + 'owi', //przyglądam się pingwin-owi
                B: word + 'a', //widzę pingwin-a
                N: word + 'em', //z pingwin-em
                Msc: word + 'ie', //o pingwin-ie
                W: word + 'ie', //o! pingwin-ie
            }
        case caseType['()()((l)) a owi a em e e']: //orzeł
            return {
                M: word,//jest orzeł
                D: word.replace('ze', '') + 'a', // nie ma or()()ł-a
                C: word.replace('ze', '') + 'owi', //przyglądam się or()()ł-owi
                B: word.replace('ze', '') + 'a', //widzę or()()ł-a
                N: word.replace('ze', '') + 'em', //z or()()ł-em
                Msc: word.replace('ze', '').replace('ł', 'l') + 'e', //o or()()(l)-e
                W: word.replace('ze', '').replace('ł', 'l') + 'e', //o! or()()(l)-e
            }
        default:
            console.log('brak odmiany przez przypadki dla typu: ' + type + ' i słowa: ' + word)
            return {
                M: word,
                D: word + 'a',
                C: word + 'u',
                B: word + 'a',
                N: word + 'em',
                Msc: word.slice(0, word.length - 1) + 'cie',
                W: word.slice(0, word.length - 1) + 'cie',
            }
    }
}
export function i_adjectivesTense(word: string, formal: boolean, tense: string, negation: boolean) {
    if (formal) {
        if (!negation) {
            if (tense === 'past') {
                return word.slice(0, -1) + 'katta desu'
            } else {//present, future
                return word + ' desu'
            }
        } else {//negation
            if (tense === 'past') {
                return word.slice(0, -1) + 'kunakatta desu'
            } else {//present, future
                return word.slice(0, -1) + 'kunai desu'
            }
        }
    }
}
export function na_adjectivesTense(word: string, formal: boolean, tense: string, negation: boolean) {
    if (formal) {
        if (!negation) {
            if (tense === 'past') {
                return word.slice(0, -2) + ' deshita'
            } else {//present, future
                return word.slice(0, -2) + ' desu'
            }
        } else {//negation
            if (tense === 'past') {
                return word.slice(0, -2) + ' dewa arimasen deshita'
            } else {//present, future
                return word.slice(0, -2) + ' dewa arimasen'
            }
        }
    }
}

export const greetings = [
    { jp: 'Moshi moshi!', pl: 'Halo!' },
    { jp: '(Doumo) sumimasen!', pl: 'Przepraszam!' },
    { jp: '(Sore-wa) omedetou!', pl: 'Gratulacje!' },
    { jp: '(Aa) sou desu ka?', pl: 'Ach, tak?' },
    { jp: '(Aa) sou desu ka?', pl: 'Ach, tak?' },
    { jp: 'Youkatta desu ne. / Sore-wa ii desu ne', pl: 'To dobrze. (2 wersje)' },
    { jp: 'Onegai shimasu.', pl: 'Proszę.' },
    { jp: 'Sore-wa taihen desu ne.', pl: 'To straszne.' },
    { jp: 'Nani ka...', pl: 'O co chodzi?' },
    { jp: 'Jaa, kore-de.', pl: 'Na tym zakończę.' },
    { jp: 'Mata ashita.', pl: 'Do jutra.' },
]

export const adjectives: Adjective = {
    all: [
        { jp: 'tanoshii', pl: 'przyjemny', rz: 'przyjemność' },
        { jp: 'shiroi', pl: 'biały', rz: 'biel' },
        { jp: 'aoi', pl: 'niebieski', rz: 'niebieskość' },
        { jp: 'akai', pl: 'czerwony', rz: 'czerwień' },
        { jp: 'sukina', pl: 'ulubiony', rz: 'lubienie' },
        { jp: 'kiraina', pl: 'nielubiany', rz: 'nielubienie' },
        { jp: 'hiroi', pl: 'szeroki', rz: 'szerokość' },
        { jp: 'kudaranai', pl: 'trywialny', rz: 'trywialność' },
        { jp: 'bakarashii', pl: 'absurdalny', rz: 'absurd' },
        { jp: 'orokana', pl: 'głupiutki', rz: 'głupotka' },
        { jp: 'jouhinna', pl: 'elegancki', rz: 'elegancja' },
        { jp: 'kashikoi', pl: 'mądry', rz: 'mądrość' },
        { jp: 'bimyouna', pl: 'delikatny', rz: 'delikatność' },
        { jp: 'futoi', pl: 'gruby', rz: 'grubość' },
        { jp: 'semai', pl: 'wąski', rz: 'wąskość' },
        { jp: 'isamashii', pl: 'odważny', rz: 'odwaga' },
        { jp: 'anzenna', pl: 'bezpieczny', rz: 'bezpieczeństwo' },
        { jp: 'abunai', pl: 'niebezpieczny', rz: 'niebezpieczeństwo' },
        { jp: 'benrina', pl: 'wygodny', rz: 'wygoda' },
        { jp: 'se-ga takai', pl: 'wzrostem wysoki', rz: 'wysokość wzrostu' },
        { jp: 'takai', pl: 'wysoki', rz: 'wysykość' },
        { jp: 'takai', pl: 'drogi', rz: 'drogość' },
        { jp: 'se-ga hikui', pl: 'wzrostem niski', rz: 'niskość wzrostu' },
        { jp: 'hikui', pl: 'niski', rz: 'niskość' },
        { jp: 'kireina', pl: 'fizycznie piękny', rz: 'piękność fizyczna' },
        { jp: 'utsukushii', pl: 'wewnętrznie i fizycznie piękny', rz: 'piękność wew i zew' },
        { jp: 'minikui', pl: 'brzydki', rz: 'brzydkość' },
        { jp: 'warui', pl: 'zły', rz: 'złość' },
        { jp: 'yasui', pl: 'tani', rz: 'taniość' },
        { jp: 'ookii', pl: 'duży', rz: 'wielkość' },
        { jp: 'chiisai', pl: 'mały', rz: 'małość' },
        { jp: 'atsui', pl: 'gorący', rz: 'gorącość' },
        { jp: 'chikai', pl: 'bliski', rz: 'bliskość' },
        { jp: 'yuumeina', pl: 'słynny', rz: 'słynność' },
        { jp: 'yuumeina', pl: 'sławny', rz: 'sławność' },
        { jp: 'tooi', pl: 'odległy', rz: 'odległość' },
        { jp: 'hayai', pl: 'szybki', rz: 'szybkość' },
        { jp: 'osoi', pl: 'powolny', rz: 'powolność' },
        { jp: 'atatakai', pl: 'w dotyku ciepły', rz: 'ciepłość' },
        { jp: 'suzushii', pl: 'w dotyku zimny', rz: 'zimność' },
        { jp: 'omoi', pl: 'ciężki', rz: 'ciężar' },
        { jp: 'karui', pl: 'lekki', rz: 'lekkość' },
        { jp: 'nagai', pl: 'długi', rz: 'długość' },
        { jp: 'mijikai', pl: 'krótki', rz: 'krótkość' },
        { jp: 'amai', pl: 'w smaku słodki', rz: 'skodycz smaku' },
        { jp: 'karai', pl: 'w smaku ostry', rz: 'ostrość smaku' },
        { jp: 'isogashii', pl: 'zajęty', rz: 'zajętość' },
        { jp: 'himana', pl: 'w sensie czasu wolny', rz: 'wolność czasu' },
    ]
}
export function declineAdjective(item: any, tense: string, negation: boolean, formal = true) {

    const isIadj = (item.jp.match(/na$/)) ? false : true
    if (isIadj) {
        return i_adjectivesTense(item.jp, formal, tense, negation)
    } else {
        return na_adjectivesTense(item.jp, formal, tense, negation)
    }
}
export function verbFormJp(verb: string, form: VerbForm): string {

    const isIchidandoshi = verb.match(/iru$|eru$/) ? true : false

    function extractTeTaBase(verb: string): string {
        //exceptions
        if (verb === 'iru') return 'it' //bo go wezmie jako ichidandoshi
        if (verb === 'iku') return 'it' //jako godandoshi
        if (verb.match(/suru$/)) return verb.replace(/suru$/, 'shi')//jako godandoshi
        if (isIchidandoshi) {
            return verb.slice(0, -2)
        } else {
            if (verb.match(/tsu$/)) return verb.slice(0, -3)
            if (verb.match(/au$/)) {
                return verb.slice(0, -1)
            } else {
                return verb.slice(0, -2)
            }
        }
    }

    function can(verb: string) { //can
        if (verb === 'suru') return 'dekiru'
        if (verb === 'kuru') return 'korareru'
        if (isIchidandoshi) {
            return verb.slice(0, -2) + 'rareru'
        } else {
            if (verb.match(/tsu$/)) return verb.slice(0, -2) + 'eru'
            return verb.slice(0, -1) + 'eru'
        }
    }

    function extractTeTaSuffix(verb: string) {
        if (verb === 'iru') return 't' //bo go wezmie jako ichidandoshi
        if (verb === 'iku') return 't' //jako godandoshi
        if (verb.match(/suru$/)) return 't'//jako godandoshi

        if (isIchidandoshi) {
            return 't'
        } else {
            switch (verb.slice(-2)) {
                case 'bu':
                case 'mu':
                case 'nu': return 'nd'
                case 'ku': return 'it'
                case 'su': return 'shit'
                case 'tsu':
                case 'ru':
                case 'au': return 'tt'
                default:
                    console.log('unknown verb suffix: ', verb)
                    return '?'
            }
        }
    }

    function extractNaiSuffix(verb: string) {
        if (verb === 'iru') return 'anai' //bo go wezmie jako ichidandoshi
        if (verb === 'iku') return 'anai' //jako godandoshi
        if (verb === 'kuru') return 'konai'
        if (verb.match(/suru$/)) return 'nai'//jako godandoshi

        if (isIchidandoshi) {
            return 'nai'
        } else {
            switch (verb.slice(-2)) {
                case 'bu': //yobu
                case 'mu': //nomu
                case 'nu': //shinu
                case 'ku': //kiku
                case 'su':
                case 'tsu'://mitsu  //<--tu jest tsu a tam slice 2 on nigdy tunie wejdzie! i w teta tez
                case 'ru': return 'anai'//tsukuru
                case 'uu': return //suu 
                case 'au': return 'wanai'//kau
                default:
                    console.log('unknown verb suffix: ', verb)
                    return '?'
            }
        }
    }


    function extractMasuBase(verb: string): string {
        //exceptions
        if (verb.match(/suru$/)) return verb.replace(/suru$/, 'shi')
        if (verb.match(/su$/)) return verb.replace(/su$/, 'shi')
        if (verb === 'iru') return 'iri' //wzor pasuje, ale itnie 2 literu!
        if (verb === 'iku') return 'iki' //jw
        return isIchidandoshi ? verb.slice(0, -2) : verb.replace(/u$/, 'i')
    }

    function extractBase(verb: string): string {
        //exceptions
        if (verb.match(/suru$/)) return verb.replace(/suru$/, 'shi')
        if (verb.match(/su$/)) return verb.replace(/su$/, 'shi')
        if (verb === 'kuru') return '' //tu puste, a w odmianie cale
        if (verb === 'iru') return 'ir' //wzor pasuje, ale itnie 2 literu!
        if (verb === 'iku') return 'ik' //jw
        return isIchidandoshi ? verb.slice(0, -2) : verb.slice(0, -1).replace(/ts$/, 't')
    }


    switch (form) {
        case jpVerbFormsPool.eru:
            return can(verb)
        case jpVerbFormsPool.te:
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'e'
        case jpVerbFormsPool.ta:
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'a'
        case jpVerbFormsPool.katta:
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'akatta'
        case jpVerbFormsPool.ikemasen:
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'e-wa ikemasen'
        case jpVerbFormsPool.nasai:
            return extractMasuBase(verb) + 'nasai'
        case jpVerbFormsPool.nakute:
            return extractMasuBase(verb) + 'nakute'
        case jpVerbFormsPool.masu:
            return extractMasuBase(verb) + 'masu'
        case jpVerbFormsPool.masen:
            return extractMasuBase(verb) + 'masen'
        case jpVerbFormsPool.mashita:
            return extractMasuBase(verb) + 'mashita'
        case jpVerbFormsPool.masendeshita:
            return extractMasuBase(verb) + 'masen deshita'
        case jpVerbFormsPool.shou:
            return extractMasuBase(verb) + 'mashou'
        case jpVerbFormsPool.nai:
            //const end = verb.match(/au$/) ? verb.slice(0, -1) + 'wanai' : verb.slice(0, -2) + 'anai'
            return extractBase(verb) + extractNaiSuffix(verb)
        case jpVerbFormsPool.naide:
            //const end = verb.match(/au$/) ? verb.slice(0, -1) + 'wanai' : verb.slice(0, -2) + 'anai'
            return extractBase(verb) + extractNaiSuffix(verb) + 'de'
        case jpVerbFormsPool.masuBase:
            return extractMasuBase(verb)
        default:
            console.log('??? nieznana forma: ', form)
            return verb
    }

}
//deprecated
export function teForm_deprecated(verb: string, form: string): string {

    //exceptions
    if (verb === 'suru') return 'shite'
    if (verb === 'iru') return 'itte'
    if (verb === 'iku') return 'itte'
    //ichidandoshi
    if (verb.match(/iru$|eru$/)) {
        return verb.replace(/ru$/, 'te')
    } else {
        //godandoshi
        switch (verb.slice(-2)) {
            case 'bu': return verb.replace(/bu$/, 'nde')
            case 'mu': return verb.replace(/mu$/, 'nde')
            case 'nu': return verb.replace(/nu$/, 'nde')
            case 'ku': return verb.replace(/ku$/, 'ite')
            case 'su': return verb.replace(/su$/, 'shite')
            case 'tsu': return verb.replace(/tsu$/, 'tte')
            case 'ru': return verb.replace(/ru$/, 'tte')
            case 'au': return verb.replace(/u$/, 'tte')
            default:
                console.log('unknown verb suffix: ', verb)
                return verb
        }
    }
}
export const jpVerbFormsPool:{[key:string]:VerbForm} = {
    eru: 'eru',
    naide: 'naide',
    te: 'te',
    ta: 'ta',
    katta: 'katta',
    ikemasen: 'ikemasen',
    nasai: 'nasai',
    nakute: 'nakute',
    masu: 'masu',
    masen: 'masen',
    mashita: 'mashita',
    masendeshita: 'masendeshita',
    shou: 'shou', //propozycja
    nai: 'nai',
    masuBase: 'masuBase'
}
export const numbers: Numbers = {
    general: {
        '?': 'nan',
        '1': 'ichi',
        '2': 'ni',
        '3': 'san',
        '4': 'shi',
        '5': 'go',
        '6': 'roku',
        '7': 'shichi',
        '8': 'hachi',
        '9': 'kyuu',
        '10': 'jyuu',
    },
    things: {//liczenie ogolne
        '?': 'ikutsu',
        '1': 'hitotsu',
        '2': 'futatsu',
        '3': 'mittsu',
        '4': 'yottsu',
        '5': 'itsutsu',
        '6': 'muttsu',
        '7': 'nanatsu',
        '8': 'yattsu',
        '9': 'kokonotsu',
        '10': 'too',
    },
    juu: {//dziesiatki
        '?': 'nanjuu',
        '1': 'juu',
        '2': 'nijuu',
        '3': 'sanjuu',
        '4': 'yonjuu',
        '5': 'gojuu',
        '6': 'rokujuu',
        '7': 'nanajuu',
        '8': 'hachijuu',
        '9': 'kyuujuu',
        '10': 'hyaku'
    },
    hyaku: {//setki
        '?': 'nanhyaku',
        '1': 'hyaku',
        '2': 'nihyaku',
        '3': 'sanbyaku',
        '4': 'yonhyaku',
        '5': 'gohyaku',
        '6': 'roppyaku',
        '7': 'nanahyaku',
        '8': 'happyaku',
        '9': 'kyuuhyaku',
        '10': 'sen',
    },
    sen: {//tysiace
        '?': 'nansen',
        '1': 'sen',
        '2': 'nisen',
        '3': 'sansen',
        '4': 'yonsen',
        '5': 'gosen',
        '6': 'rokusen',
        '7': 'nanasen',
        '8': 'hachisen',
        '9': 'kyuusen',
        '10': 'ichi man',
    },
    man: {//10 000
        '?': 'nan man',
        '1': 'ichi man',
        '2': 'ni man',
        '3': 'san man',
        '4': 'yon man',
        '5': 'go man',
        '6': 'roku man',
        '7': 'nana man',
        '8': 'hachi man',
        '9': 'kyuu man',
        '10': 'juu man',
    },
    en: {//yen
        '?': "nan'en",
        '1': 'ichi en',
        '2': 'ni en',
        '3': 'san en',
        '4': 'yon en',
        '5': 'go en',
        '6': 'roku en',
        '7': 'nana en',
        '8': 'hachi en',
        '9': 'kyuu en',
        '10': 'juu en',
    },
    nin: {//ludzie
        '?': 'nannin',
        '1': 'hitori',
        '2': 'futari',
        '3': 'sannin',
        '4': 'yonin',
        '5': 'gonin',
        '6': 'rokunin',
        '7': 'shichi/nananin',
        '8': 'hachinin',
        '9': 'kyuunin/kunin',
        '10': 'jyuunin',
    },
    hon: {//dlugie obiekty
        '?': 'nanbon',
        '1': 'ippon',
        '2': 'nihon',
        '3': 'sanbon',
        '4': 'yonhon',
        '5': 'gohon',
        '6': 'roppon',
        '7': 'shichihon/nanahon',
        '8': 'hachihon',
        '9': 'kyuuhon',
        '10': 'jyuppon/jippon',
    },
    hiki: {//male zwierzeta
        '?': 'nanbiki',
        '1': 'ippiki',
        '2': 'nihiki',
        '3': 'sanbiki',
        '4': 'yonhiki',
        '5': 'gohiki',
        '6': 'roppiki',
        '7': 'shichihiki/nanahiki',
        '8': 'happiki',
        '9': 'kyuuhiki',
        '10': 'jyuuppiki/jippiki',

    },
    tou: {//duże zwierzeta, zwierzęta pracujące, inteligentne
        '?': 'nantou',
        '1': 'ittou',
        '2': 'nitou',
        '3': 'santou',
        '4': 'yontou',
        '5': 'gotou',
        '6': 'rokutou',
        '7': 'shichitou/nanatou',
        '8': 'hachitou/hattou',
        '9': 'kyuutou',
        '10': 'jyuttou/jittou',
    },
    wa: {//ptaki,nietoperze i króliki
        '?': 'nanwa/nanba',
        '1': 'ichiwa',
        '2': 'niwa',
        '3': 'sanwa/sanba',
        '4': 'yonwa/yonba/yowa',
        '5': 'gowa',
        '6': 'rokuwa/robba',
        '7': 'nanawa/shichiwa',
        '8': 'hachiwa/happa',
        '9': 'kyuuwa',
        '10': 'juuwa/jubba/jibba'
    },
    bai: {//kubki, filiżanki, kieliszki
        '?': 'nanbai',
        '1': 'ippai',
        '2': 'nihai',
        '3': 'sanbai',
        '4': 'yonhai',
        '5': 'gohai',
        '6': 'roppai',
        '7': 'shichihai/nanahai',
        '8': 'happai',
        '9': 'kyuuhai',
        '10': 'jyuppai/jippai',

    },
    sai: {//lata
        '?': 'nansai',
        '1': 'issai',
        '2': 'nisai',
        '3': 'sansai',
        '4': 'yonsai',
        '5': 'gosai',
        '6': 'rokusai',
        '7': 'nanasai',
        '8': 'hassai',
        '9': 'kyuusai',
        '10': 'juussai',

    },

    kai: {//piętra
        '?': 'nangai',
        '1': 'ikkai',
        '2': 'nikai',
        '3': 'sangai',
        '4': 'yonkai',
        '5': 'gokai',
        '6': 'rokkai',
        '7': 'shichikai/nanakai',
        '8': 'hakkai',
        '9': 'kyuukai',
        '10': 'jyukkai/jikkai',
    },
    dai: {//pojazdy (w tym rower), maszyny
        '?': 'nandai',
        '1': 'ichidai',
        '2': 'nidai',
        '3': 'sandai',
        '4': 'yondai',
        '5': 'godai',
        '6': 'rokudai',
        '7': 'shichidai/nanadai',
        '8': 'hachidai',
        '9': 'kyuudai',
        '10': 'jyuudai',
    },
    hun: {//minuty
        '?': 'nanpun',
        '1': 'ippun',
        '2': 'nihun',
        '3': 'sanbun',
        '4': 'yonpun',
        '5': 'gohun',
        '6': 'roppun',
        '7': 'shichihun/nanahun',
        '8': 'happun',
        '9': 'kyuuhun',
        '10': 'jyuuppun/jippun',

    },
    ji: {//godziny
        '?': 'nanji',
        '1': 'ichiji',
        '2': 'niji',
        '3': 'sanji',
        '4': 'yoji',
        '5': 'goji',
        '6': 'rokuji',
        '7': 'shichiji',
        '8': 'hachiji',
        '9': 'kuji',
        '10': 'jyuuji',

    },

    nen: {//lata
        '?': 'nannen',
        '1': 'ichinen',
        '2': 'ninen',
        '3': 'sannen',
        '4': 'yonen',
        '5': 'gonen',
        '6': 'rokunen',
        '7': 'nananen',
        '8': 'hachinen',
        '9': 'kyuunen',
        '10': 'juunen',
    },
    satsu: {//tomy książek
        '?': 'nansatsu',
        '1': 'issatsu',
        '2': 'nisatsu',
        '3': 'sansatsu',
        '4': 'yonsatsu',
        '5': 'gosatsu',
        '6': 'rokusatsu',
        '7': 'shichisatsu/nanasatsu',
        '8': 'hassatsu',
        '9': 'kyuusatsu',
        '10': 'jyussatsu/jussatsu',
    },
    mai: {//płaskie rzeczy
        '?': 'nanmai',
        '1': 'ichimai',
        '2': 'nimai',
        '3': 'sanmai',
        '4': 'yonmai',
        '5': 'gomai',
        '6': 'rokumai',
        '7': 'shichimai/nanamai',
        '8': 'hachimai',
        '9': 'kyuumai',
        '10': 'jyuumai',
    },
    ka: {//dni
        '?': 'nannichi',
        '1': 'tsuitachi',
        '2': 'futsuka',
        '3': 'mikka',
        '4': 'yokka',
        '5': 'itsuka',
        '6': 'muika',
        '7': 'nanoka',
        '8': 'youka',
        '9': 'kokonoka',
        '10': 'tooka',
    },
}
export const numbersKeyMatrix = init(numbers)
export const plCasePool = {
    M: 'M',
    D: 'D',
    C: 'C',
    B: 'B',
    N: 'N',
    Msc: 'Msc',
    W: 'W',
    M_pl: 'M_pl',
    D_pl: 'D_pl',
    C_pl: 'C_pl',
    B_pl: 'B_pl',
    N_pl: 'N_pl',
    Msc_pl: 'Msc_pl',
    W_pl: 'W_pl',
}

function plVerbDeclination(verb: string, mode: string): string {
    ///// todo
    switch (mode) {
        case 'infinitive': return verb
        case 'imperative': return verb //rozkazujacy
        case 'gerund': return verb //rzeczownik odczasownikowy np robienie
        default: console.log('unkknown mode: ', mode)
            return verb
    }

}


export const whichPl: WhichPl = { m: 'który', ż: 'która', n: 'które', mo: 'którzy', nmo: 'które' }
export const pronouns: { [key: string]: Pronoun } = {
    which: { jp: 'donna', pl: whichPl },

}
export function ktoryConj(gender: string) {
    switch (gender) {
        case 'ż': return 'którą'
        case 'm': return 'który'
        case 'n': return 'które'
        case 'mo': return 'którzy'
        case 'nmo': return 'które'
        default:
            console.log('unknown gender', gender)
            return 'ktory'

    }
}
export const verbs: Verb = {
    move: [
        {
            jp: {
                dictionaryForm: 'iku',
                particle: ['e', 'ni']
            },
            pl: {
                infinitive: 'iść',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: 'do', case: plCasePool.D },
                    { preposition: 'z', case: plCasePool.D },
                ],
                rozkazujący2os: 'idź', rozkazujący: 'chodźmy', imieslowNiedokonany: 'pójście', niedokonany: 'iść', dokonany: 'pójść', os3: 'idzie'
            },
            tags: ['move'],
        },
        {
            jp: {
                dictionaryForm: 'tobu',
                particle: ['o']
            },
            pl: {
                infinitive: 'latać',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: 'po', case: plCasePool.Msc },
                ],
                rozkazujący2os: 'leć', rozkazujący: 'lećmy', imieslowNiedokonany: 'latanie', niedokonany: 'lecieć', dokonany: 'polecieć', os3: 'lata'
            },
            tags: ['move'],
        },
        {
            jp: {
                dictionaryForm: 'aruku',
                particle: ['o']
            },
            pl: {
                infinitive: 'spacerować',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: 'po', case: plCasePool.Msc },
                ],
                rozkazujący2os: 'spaceruj', rozkazujący: 'spacerujmy', imieslowNiedokonany: 'spacerowanie', niedokonany: 'spacerować', dokonany: 'pospacerować', os3: 'spaceruje'
            },
            tags: ['move'],
        },
        {
            jp: {
                dictionaryForm: 'kaeru',
                particle: ['e', 'ni'] //???
            },
            pl: {
                infinitive: 'wracać',
                isPerfective: false,
                isReflexive: true,
                isNonReflexive: true,
                prepositions: [
                    { preposition: 'do', case: plCasePool.D },
                    { preposition: 'z', case: plCasePool.D },
                ],
                rozkazujący2os: 'wróć', rozkazujący: 'wróćmy', imieslowNiedokonany: 'wracanie', niedokonany: 'wracać', dokonany: 'warócić', os3: 'wraca'
            },
            tags: ['move'],
        },
        {
            jp: {
                dictionaryForm: 'hashiru',
                particle: ['e', 'ni'] //???
            },
            pl: {
                infinitive: 'biegać',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: 'do', case: plCasePool.D },
                    { preposition: 'z', case: plCasePool.D },
                ],
                rozkazujący2os: 'biegnij', rozkazujący: 'biegnijmy', imieslowNiedokonany: 'bieganie', niedokonany: 'biegać', dokonany: 'biec', os3: 'biegnie'
            },
            tags: ['move'],
        },
    ],
    actions: [
        {
            jp: {
                dictionaryForm: 'motsu',
                particle: ['o']
            },
            pl: {
                infinitive: 'brać',
                isPerfective: true,
                isReflexive: true,
                isNonReflexive: false,
                prepositions: [
                    { preposition: '', case: plCasePool.N },
                ],
                rozkazujący2os: 'bierz', rozkazujący: 'bierzmy', imieslowNiedokonany: 'branie', niedokonany: 'brać', dokonany: 'zabrać', os3: 'bierze'
            },
            tags: ['action'],
        },
        {
            jp: {
                dictionaryForm: 'yomu',
                particle: ['o']
            },
            pl: {
                infinitive: 'czytać',
                isPerfective: true,
                isReflexive: true,
                isNonReflexive: false,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'czytaj', rozkazujący: 'cxytajmy', imieslowNiedokonany: 'czytanie', niedokonany: 'czytać', dokonany: 'przeczytać', os3: 'czyta'
            },
            tags: ['action'],
        },
        {
            jp: {
                dictionaryForm: 'naru',
                particle: ['ni']
            },
            pl: {
                infinitive: 'stać się',
                isPerfective: true,
                isReflexive: true,
                isNonReflexive: false,
                prepositions: [
                    { preposition: '', case: plCasePool.N },
                ],
                rozkazujący2os: 'stań się', rozkazujący: 'stańmy się', imieslowNiedokonany: 'stawanie się', niedokonany: 'stawać się', dokonany: 'stać się', os3: 'staje się'
            },
            tags: ['idle'],
        },
        {
            jp: {
                dictionaryForm: 'miru',
                particle: ['o']
            },
            pl: {
                infinitive: 'widzieć',
                isPerfective: false,
                isReflexive: true,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'zobacz', rozkazujący: 'zobaczmy', imieslowNiedokonany: 'widzenie', niedokonany: 'widzieć', dokonany: 'zobaczyć', os3: 'widzi'
            },
            tags: ['idle'],
        },
        {
            jp: {
                dictionaryForm: 'kau',
                particle: ['o']
            },
            pl: {
                infinitive: 'kupować',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'kup', rozkazujący: 'kupmy', imieslowNiedokonany: 'kupowanie', niedokonany: 'kupować', dokonany: 'kupić', os3: 'kupuje'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'suru',
                particle: ['o']
            },
            pl: {
                infinitive: 'robić',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'zrób', rozkazujący: 'zróbmy', imieslowNiedokonany: 'robienie', niedokonany: 'robić', dokonany: 'zrobić', os3: 'robi'
            },
            tags: ['item', 'action'],
        },
        {
            jp: {
                dictionaryForm: 'tsukuru',
                particle: ['o']
            },
            pl: {
                infinitive: 'przygotować',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'przygotuj',
                rozkazujący: 'przygotujmy', imieslowNiedokonany: 'przygotowywanie', niedokonany: 'przygotowywać', dokonany: 'przygotować', os3: 'przygotowuje'
            },
            tags: ['item', 'action'],
        },
        {
            jp: {
                dictionaryForm: 'neru',
                particle: []
            },
            pl: {
                infinitive: 'spać',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [],
                rozkazujący2os: 'śpij',
                rozkazujący: 'śpijmy', imieslowNiedokonany: 'spanie', niedokonany: 'spać', dokonany: 'wyspać', os3: 'śpi'
            },
            tags: ['idle'],
        },

        {
            jp: {
                dictionaryForm: 'okiru',
                particle: []
            },
            pl: {
                infinitive: 'budzić',
                isPerfective: false,
                isReflexive: true,
                isNonReflexive: true,
                prepositions: [],
                rozkazujący2os: 'budź',
                rozkazujący: 'budźmy', imieslowNiedokonany: 'budzenie', niedokonany: 'budzić', dokonany: 'obudzić', os3: 'budzi'
            },
            tags: ['idle'],
        },
        {
            jp: {
                dictionaryForm: 'okuru',
                particle: ['o']
            },
            pl: {
                infinitive: 'wysyłać',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'wyślij',
                rozkazujący: 'wyślijmy', imieslowNiedokonany: 'wysyłanie', niedokonany: 'wysyłać', dokonany: 'wysłać', os3: 'wysyła'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'deru',
                particle: []
            },
            pl: {
                infinitive: 'wychodzić',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [],
                rozkazujący2os: 'wyjdź',
                rozkazujący: 'wyjdźmy', imieslowNiedokonany: 'wychodzenie', niedokonany: 'wychodzić', dokonany: 'wyjść', os3: 'wychodzi'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'iru',
                particle: ['o']
            },
            pl: {
                infinitive: 'potrzebować',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'potrzebuj',
                rozkazujący: 'potrzebujmy', imieslowNiedokonany: 'potrzebowanie', niedokonany: 'potrzebować', dokonany: 'potrzebować', os3: 'potrzebuje'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'oboeru',
                particle: ['o']
            },
            pl: {
                infinitive: 'pamiętać',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'pamiętaj',
                rozkazujący: 'zapamiętajmy', imieslowNiedokonany: 'zapamiętywanie', niedokonany: 'zapamiętywać', dokonany: 'zapamiętać', os3: 'pamięta'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'nakunaru',
                particle: []
            },
            pl: {
                infinitive: 'zgubić',//się
                isPerfective: false,
                isReflexive: true,
                isNonReflexive: true,
                prepositions: [],
                rozkazujący2os: 'zgub się',
                rozkazujący: 'zgubmy się', imieslowNiedokonany: 'gubienie się', niedokonany: 'gubić się', dokonany: 'zgubić się', os3: 'gubi się'
            },
            tags: ['idle'],
        },
        {
            jp: {
                dictionaryForm: 'nakusu',
                particle: ['o']
            },
            pl: {
                infinitive: 'zgubić',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'zgub',
                rozkazujący: 'zgubmy', imieslowNiedokonany: 'gubienie', niedokonany: 'gubić', dokonany: 'zgubić', os3: 'gubi'
            },
            tags: ['item'],
        },
        {
            jp: {
                dictionaryForm: 'mitsukeru',
                particle: ['o']
            },
            pl: {
                infinitive: 'znajdować',
                isPerfective: false,
                isReflexive: false,
                isNonReflexive: true,
                prepositions: [
                    { preposition: '', case: plCasePool.B },
                ],
                rozkazujący2os: 'znajdź',
                rozkazujący: 'znajdźmy', imieslowNiedokonany: 'znajdowanie', niedokonany: 'znajdować', dokonany: 'znaleźć', os3: 'znajduje'
            },
            tags: ['item'],
        },
    ]
}
export const verbsKeyMatrix = init(verbs)
export const verbs_deprecated = {
    move: [
        { jp: 'iku', pl: { rozkazujący: 'chodźmy', imieslowNiedokonany: 'pójście', niedokonany: 'iść', dokonany: 'pójść', os3: 'idzie' }, particle: { jp: 'ni', pl: { txt: 'do', case: 'D' } } },
        { jp: 'kaeru', pl: { rozkazujący: 'wróćmy', imieslowNiedokonany: 'wracanie', niedokonany: 'wracać', dokonany: 'warócić', os3: 'wraca' }, particle: { jp: 'e', pl: { txt: '', case: 'D' } } },
        { jp: 'hashiru', pl: { rozkazujący: 'biegnijmy', imieslowNiedokonany: 'bieganie', niedokonany: 'biegać', dokonany: 'biec', os3: 'biegnie' }, particle: { jp: 'e', pl: { txt: '', case: 'D' } } },
    ],
    actions: [
        { jp: 'miru', pl: { rozkazujący: 'zobaczmy', imieslowNiedokonany: 'widzenie', niedokonany: 'widzieć', dokonany: 'zobaczyć', os3: 'widzi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'kau', pl: { rozkazujący: 'kupmy', imieslowNiedokonany: 'kupowanie', niedokonany: 'kupować', dokonany: 'kupić', os3: 'kupuje' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'suru', pl: { rozkazujący: 'zróbmy', imieslowNiedokonany: 'robienie', niedokonany: 'robić', dokonany: 'zrobić', os3: 'robi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'neru', pl: { rozkazujący: 'śpijmy', imieslowNiedokonany: 'spanie', niedokonany: 'spać', dokonany: 'wyspać', os3: 'śpi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okiru', pl: { rozkazujący: 'budźmy', imieslowNiedokonany: 'budzenie', niedokonany: 'budzić', dokonany: 'obudzić', os3: 'budzi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okuru', pl: { rozkazujący: 'wyślijmy', imieslowNiedokonany: 'wysyłanie', niedokonany: 'wysyłać', dokonany: 'wysłać', os3: 'wysyła' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'deru', pl: { rozkazujący: 'wyjdźmy', imieslowNiedokonany: 'wychodzenie', niedokonany: 'wychodzić', dokonany: 'wyjść', os3: 'wychodzi' }, particle: { jp: 'o', pl: { txt: 'od/z', case: 'D' } } },
        { jp: 'iru', pl: { rozkazujący: 'potrzebujmy', imieslowNiedokonany: 'potrzebowanie', niedokonany: 'potrzebować', dokonany: 'potrzebować', os3: 'potrzebuje' }, particle: { jp: 'ga', pl: { txt: '', case: 'B' } } },
        { jp: 'oboeru', pl: { rozkazujący: 'zapamiętajmy', imieslowNiedokonany: 'zapamiętywanie', niedokonany: 'zapamiętywać', dokonany: 'zapamiętać', os3: 'pamięta' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'nakunaru', pl: { rozkazujący: 'zgubmy się', imieslowNiedokonany: 'gubienie się', niedokonany: 'gubić się', dokonany: 'zgubić się', os3: 'gubi się' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'nakusu', pl: { rozkazujący: 'zgubmy', imieslowNiedokonany: 'gubienie', niedokonany: 'gubić', dokonany: 'zgubić', os3: 'gubi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'mitsukeru', pl: { rozkazujący: 'znajdźmy', imieslowNiedokonany: 'znajdowanie', niedokonany: 'znajdować', dokonany: 'znaleźć', os3: 'znajduje' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
    ]
}

export const time: Time = {
    daysOfMonth: [
        { jp: "tsuitachi", pl: "1 dzień miesiąca" },
        { jp: "futsu-ka", pl: "2 dzień miesiąca" },
        { jp: "mik-ka", pl: "3 dzień miesiąca" },
        { jp: "yok-ka", pl: "4 dzień miesiąca" },
        { jp: "itsu-ka", pl: "5 dzień miesiąca" },
        { jp: "mui-ka", pl: "6 dzień miesiąca" },
        { jp: "nano-ka", pl: "7 dzień miesiąca" },
        { jp: "you-ka", pl: "8 dzień miesiąca" },
        { jp: "kokono-ka", pl: "9 dzień miesiąca" },
        { jp: "too-ka", pl: "10 dzień miesiąca" },
        { jp: "jyu-yok-ka", pl: "14 dzień miesiąca" },
        { jp: "hatsu-ka", pl: "20 dzień miesiąca" },
        { jp: "ni-jyu-yok-ka", pl: "24 dzień miesiąca" },
    ],
    present: [  //present
        { jp: 'kyou', pl: 'dzisiaj', time: 'present' },
        { jp: 'kotoshi', pl: 'w tym roku', time: 'present' },
        { jp: 'konshuu', pl: 'w tym tygodniu', time: 'present' },
        { jp: 'kongetsu', pl: 'w tym miesiącu', time: 'present' },
        { jp: 'ima', pl: 'teraz', time: 'present' },
        { jp: 'shuumatsu', pl: 'w weekend', time: 'present' },
    ],
    past: [  //past
        { jp: 'kinou', pl: 'wczoraj', time: 'past' },
        { jp: 'ototoi', pl: 'przedwczoraj', time: 'past' },
        { jp: 'mae-no shuu / senshuu', pl: 'w zeszłym tygodniu', time: 'past' },
        { jp: 'sensenshuu ', pl: ' dwa tygodnie temu', time: 'past' },
        { jp: 'sengetsu', pl: 'w zeszłym miesiącu', time: 'past' },
        { jp: 'sensengetsu', pl: 'dwa miesiące temu', time: 'past' },
        { jp: 'kyonen', pl: 'w zeszłym roku', time: 'past' },
        { jp: 'ototoshi', pl: 'dwa lata temu', time: 'past' },
    ],
    future: [  //future
        { jp: 'ashita', pl: 'jutro', time: 'future' },
        { jp: 'asatte', pl: 'pojutrze', time: 'future' },
        { jp: 'raishuu', pl: 'w przyszłym tygodniu', time: 'future' },
        { jp: 'saraishuu', pl: 'za dwa tygodnie', time: 'future' },
        { jp: 'raigetsu', pl: 'w przyszłym miesiącu', time: 'future' },
        { jp: 'saraigetsu', pl: 'za dwa miesiące', time: 'future' },
        { jp: 'rainen', pl: 'w przyszłym roku', time: 'future' },
        { jp: 'sarainen', pl: 'za dwa lata', time: 'future' },
    ]
}
export const timeKeyMatrix = init(time)

export const prepositions = {
    location: [
        { jp: "naka", pl: { preposition: "w", case: 'Msc' } },
        { jp: "ushiro", pl: { preposition: "za", case: 'N' } },
        { jp: "mae", pl: { preposition: "przed", case: 'N' } },
        { jp: "shita", pl: { preposition: "pod", case: 'N' } },
        { jp: "tonari", pl: { preposition: "w sąsiedztwie", case: 'D' } },
        { jp: "soba", pl: { preposition: "przy", case: 'Msc' } },
        { jp: "yoko", pl: { preposition: "obok", case: 'D' } },
        { jp: "hidari", pl: { preposition: "na lewo od", case: 'D' } },
        { jp: "migi", pl: { preposition: "na prawo od", case: 'D' } },
        { jp: "ue", pl: { preposition: "na", case: 'N' } }
    ],
}
export const prepositionsKeyMatrix = init(prepositions)
export const nouns: Noun = {
    languages: [
        { jp: 'POORANDO-go', pl: caseDeclination('język polski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'Nihon-go', pl: caseDeclination('język japoński'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'Chuugoku-go', pl: caseDeclination('język chiński'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'Eigo', pl: caseDeclination('język angielski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'DOITSU-go', pl: caseDeclination('język niemiecki'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'FURANSU-go', pl: caseDeclination('język francuski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'ITARIA-go', pl: caseDeclination('język włoski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'PORUTOGARU-go', pl: caseDeclination('język portugalski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'UKURAINA-go', pl: caseDeclination('język ukraiński'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'ROSHIA-go', pl: caseDeclination('język rosyjski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'CHEKO-go', pl: caseDeclination('język czeski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'SUROBAKIA-go', pl: caseDeclination('język słowacki'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'HANGARII-go', pl: caseDeclination('język węgierski'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
        { jp: 'kankoku-go', pl: caseDeclination('język koreański'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['language'] },
    ],
    weather: [
        { jp: 'ame', pl: caseDeclination('deszcz'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['weather'] },
        { jp: 'yuki', pl: caseDeclination('śnieg'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['weather'] },
        { jp: 'kumori', pl: caseDeclination('zachmurzenie'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['weather'] },
        { jp: 'kaze', pl: caseDeclination('wiatr'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['weather'] },
    ],
    seasons: [
        { jp: "fuyu", pl: caseDeclination('zima'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'seasons'] },
        { jp: "haru", pl: caseDeclination('wiosna'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'seasons'] },
        { jp: "aki", pl: caseDeclination('jesień'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'seasons'] },
        { jp: "natsu", pl: caseDeclination('lato'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'seasons'] },
        { jp: "IISUTAA", pl: caseDeclination('Wielkanoc'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'holidays'] },
        { jp: "KURISUMASU", pl: caseDeclination('Boże Narodzenie'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events', 'holidays'] },
    ],
    month: [
        { jp: 'ichigatsu', pl: caseDeclination('styczeń'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'nigatsu', pl: caseDeclination('luty'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'sangatsu', pl: caseDeclination('marzec'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'shigatsu', pl: caseDeclination('kwiecień'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'gogatsu', pl: caseDeclination('maj'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'rokugatsu', pl: caseDeclination('czerwiec'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'shichigatsu', pl: caseDeclination('lipiec'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'hachigatsu', pl: caseDeclination('sierpień'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'kugatsu', pl: caseDeclination('wrzesień'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'juugatsu', pl: caseDeclination('październik'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'juuichigatsu', pl: caseDeclination('listopad'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },
        { jp: 'juunigatsu', pl: caseDeclination('grudzień'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['month'] },

    ],
    week: [
        { jp: 'getsuyoubi', pl: caseDeclination('poniedziałek'), counter: 'ka', plGender: 'm', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'kayoubi', pl: caseDeclination('wtorek'), counter: 'ka', plGender: 'm', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'suiyoubi', pl: caseDeclination('środa'), counter: 'ka', plGender: 'ż', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'mokuyoubi', pl: caseDeclination('czwartek'), counter: 'ka', plGender: 'm', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'kinyoubi', pl: caseDeclination('piątek'), counter: 'ka', plGender: 'm', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'doyoubi', pl: caseDeclination('sobota'), counter: 'ka', plGender: 'ż', isAlive: false, isHuman: false, tags: ['week'] },
        { jp: 'nichiyoubi', pl: caseDeclination('niedziela'), counter: 'ka', plGender: 'ż', isAlive: false, isHuman: false, tags: ['week'] },
    ],
    clothes: [
        { jp: 'boushi', pl: caseDeclination('czapka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'kaburu', meaning: 'zakładać', particle: 'o', tags: ['dedicated', 'in'] }, { verb: 'nugu', meaning: 'ściągać', particle: 'o', tags: ['dedicated', 'out'] }, { verb: 'toru', meaning: 'ściągać', particle: 'o', tags: ['general', 'out'] }] },
        { jp: 'megane', pl: caseDeclination('okulary'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'kakeru', meaning: 'zakładać', particle: 'o', tags: ['dedicated', 'in'] }, { verb: 'toru', meaning: 'ściągać', particle: 'o', tags: ['general', 'out'] }, { verb: 'hazusu', meaning: 'ściągać', particle: 'o', tags: ['dedicated', 'out'] }] },
        { jp: 'MAFURAA', pl: caseDeclination('szalik'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'suru', meaning: 'ubierać', particle: 'o', tags: ['general', 'in'] }, { verb: 'maku', meaning: 'zakładać', particle: 'o', tags: ['dedicated', 'in'] }, { verb: 'toru', meaning: 'ściągać', particle: 'o', tags: ['general', 'out'] }] },
        { jp: 'tebukuro', pl: caseDeclination('rękawiczki'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'suru', meaning: 'ubierać', particle: 'o', tags: ['general', 'in'] }, { verb: 'hameru', meaning: 'zakładać', particle: 'o', tags: ['dedecated', 'in'] }, { verb: 'hazusu', meaning: 'ściągać', particle: 'o', tags: ['dedicated', 'out'] }, { verb: 'toru', meaning: 'ściągać', particle: 'o', tags: ['general', 'out'] }] },
        { jp: 'kutsu', pl: caseDeclination('buty'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'haku', meaning: 'wkładać', particle: 'o', tags: ['dedecated', 'in'] }, { verb: 'nugu', meaning: 'ściągać', particle: 'o', tags: ['dedicated', 'out'] }] },
        { jp: 'KOOTO', pl: caseDeclination('kurtka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['clothes'], collocations: [{ verb: 'kiru', meaning: '', particle: 'o', tags: ['dedecated', 'in'] }, { verb: 'nugu', meaning: 'ściągać', particle: 'o', tags: ['dedicated', 'out'] }] },

    ],
    animals: [
        //kto co | kogo czego (nie ma) | komu czemu (się przyglądam) 
        // | kogo co (widzę) | z kim z czym (idę) | o kim o czym (mówię)
        // o! 
        { jp: 'neko', pl: caseDeclination('kot'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//[{M:'kot'},{D:'kota'},{C:'kotu'},{B:'kota'},{N:'kotem'},{Msc:'o kocie'},{W:'kocie'}]},
        { jp: 'sakana', pl: caseDeclination('ryba'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },//[{ M: 'ryba' }, { D: 'ryby' }, { C: 'rybie' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'nezumi', pl: caseDeclination('mysz'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },//[{ M: 'mysz' }, { D: 'myszy' }, { C: 'myszy' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'ka', pl: caseDeclination('komar'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['komar', 'komara', 'komarowi', ''] },
        { jp: 'hato', pl: caseDeclination('gołąb'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['gołąb', 'gołębia'] },
        { jp: 'suzume', pl: caseDeclination('wróbel'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['wróbel', 'wróbla'] },
        { jp: 'sou', pl: caseDeclination('słoń'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['słoń', 'słonia'] },
        { jp: 'tori', pl: caseDeclination('ptak'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['ptak', 'ptaka'] },
        { jp: 'HAMUSUTAA', pl: caseDeclination('chomik'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['chomik', 'chomika'] },
        { jp: 'uma', pl: caseDeclination('koń'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['koń', 'konia'] },
        { jp: 'ushi', pl: caseDeclination('krowa'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['krowa', 'krowy'] },
        { jp: 'niwatori', pl: caseDeclination('kura'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['kura', 'kury'] },
        { jp: 'ari', pl: caseDeclination('mrówka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['mrówka', 'mrówki'] },
        { jp: 'shishiko', pl: caseDeclination('lew'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['lew', 'lwa'] },
        { jp: 'inu', pl: caseDeclination('pies'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },
        { jp: 'saru', pl: caseDeclination('małpa'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['małpa', 'małpy'] },
        { jp: 'usagi', pl: caseDeclination('królik'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['królik', 'królika'] },
        { jp: 'hitsuji', pl: caseDeclination('owca'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },//['owca', 'owcy'] },
        { jp: 'buta', pl: caseDeclination('świnia'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['świnia', 'świni'] },
        { jp: 'jinchou', pl: caseDeclination('pingwin'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//pl: ['pingwin', 'pingwina'] },
        { jp: 'ookami', pl: caseDeclination('wilk'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['wilk', 'wilka'] },
        { jp: 'kuma', pl: caseDeclination('niedźwiedź'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['niedźwiedź', 'niedźwiedzia'] },
        { jp: 'risu', pl: caseDeclination('wiewiórka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },//['wiewiórka', 'wiewiórka'] },
        { jp: 'washi', pl: caseDeclination('orzeł'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['orzeł', 'orła'] },
        { jp: 'taka', pl: caseDeclination('jastrząb'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['jastrząb', 'jastrzębia'] },
        { jp: 'wani', pl: caseDeclination('krokodyl'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//['krokodyl', 'krokodyla'] },
        { jp: 'shika', pl: caseDeclination('sarna'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['sarna', 'sarny'] },
        { jp: 'inoshishi', pl: caseDeclination('dzik'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//  ['dzik', 'dzika'] },
        { jp: 'hae', pl: caseDeclination('mucha'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['mucha', 'muchy'] },
        { jp: 'kitsune', pl: caseDeclination('lis'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// pl: ['lis', 'lisa'] },
        { jp: 'harinezumi', pl: caseDeclination('jeż'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['jeż', 'jeża'] },
        { jp: 'hiso', pl: caseDeclination('nietoperz'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['nietoperz', 'nietoperza'] },
        { jp: 'tonbo', pl: caseDeclination('ważka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['ważka', 'ważki'] },
        { jp: 'kame', pl: caseDeclination('żółw'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },//  ['żółw', 'żółwia'] },
        { jp: 'hakuchou', pl: caseDeclination('łabędź'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false, tags: ['animals'] },// ['łabędź'] },
        { jp: 'kamo', pl: caseDeclination('kaczka'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },// ['kaczka'] },
        { jp: 'fukurou', pl: caseDeclination('sowa'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false, tags: ['animals'] },//['sowa'] },
    ],
    myFamily: [
        { jp: "ani", pl: caseDeclination('starszy braciszek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "otouto", pl: caseDeclination('młodszy braciszek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "ane", pl: caseDeclination('starsza siostrzyczka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "imouto", pl: caseDeclination('młodsza siostrzyczka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "haha", pl: caseDeclination('mama'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "chichi", pl: caseDeclination('tata'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "kodomo", pl: caseDeclination('dzieciak'), counter: 'nin', plGender: 'n', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "musuko", pl: caseDeclination('synek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "musume", pl: caseDeclination('córcia'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "kanai", pl: caseDeclination('żonka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },
        { jp: "shujin", pl: caseDeclination('mężuś'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'myFamily'] },

    ],
    anotherFamily: [
        { jp: "oniisan", pl: caseDeclination('starszy brat'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "otoutosan", pl: caseDeclination('młodszy brat'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "oneesan", pl: caseDeclination('starsza siostra'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "imoutosan", pl: caseDeclination('młodsza siostra'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "okaasan", pl: caseDeclination('matka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "otoosan", pl: caseDeclination('ojciec'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "okosan", pl: caseDeclination('dziecko'), counter: 'nin', plGender: 'n', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "musukosan", pl: caseDeclination('syn'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "musumesan", pl: caseDeclination('córa'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "okosan", pl: caseDeclination('żona'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },
        { jp: "goshujin", pl: caseDeclination('mąż'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['family', 'anotherFamily'] },

    ],
    countries: [
        { jp: "POORANDO", pl: caseDeclination('Polska'), counter: '?', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: "Chuugoku", pl: caseDeclination('Chiny'), counter: '?', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: "Nihon", pl: caseDeclination('Japonia'), counter: '?', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },

    ],
    nationality: [
        { jp: "POORANDO-jin", pl: caseDeclination('Polak'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: 'Chuugoku-jin', pl: caseDeclination('Chińczyk'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: 'Nihon-jin', pl: caseDeclination('Japończyk'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: 'BURAJIRU-jin', pl: caseDeclination('Brazylijczyk'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: 'DITSU-jin', pl: caseDeclination('Niemiec'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
        { jp: 'IGIRISU-jin', pl: caseDeclination('Anglik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['nationality'] },
    ],
    professions: [
        { jp: "ban'nin", pl: caseDeclination('strażnik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "ginkouin", pl: caseDeclination('bankowiec'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: 'kangofu', pl: caseDeclination('pielęgniarka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: 'daigakusei', pl: caseDeclination('student'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: 'joshigakusei', pl: caseDeclination('studentka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: 'kyoushi', pl: caseDeclination('nauczyciel'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: 'isha', pl: caseDeclination('lekarz'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "kaisha'in", pl: caseDeclination('pracownik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "untenshu", pl: caseDeclination('kierowca'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "UEETORESU", pl: caseDeclination('kelnerka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "UEETAA", pl: caseDeclination('kelner'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "seibikou", pl: caseDeclination('mechanik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "ENJINIA", pl: caseDeclination('inżynier'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "shufu", pl: caseDeclination('gospodyni'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "hisho", pl: caseDeclination('sekretarka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "keisatsukan", pl: caseDeclination('policjant'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "biyoushi", pl: caseDeclination('fryzjer'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
        { jp: "ten'in", pl: caseDeclination('sprzedawca'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true, tags: ['professions'] },
    ],
    events: [
        { jp: "PAATII", pl: caseDeclination('przyjęcie'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events'],collocations:[
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'na',casePl:'B'}}
        ] },
        { jp: "shuumatsu", pl: caseDeclination('weekend'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['events'] },
        { jp: "yasumi", pl: caseDeclination('wakacje'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['events'] ,collocations:[
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'na',casePl:'B'}}
        ] },
    ],
    items: [
        { jp: "TEEPU", pl: caseDeclination('taśma'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "KAADO", pl: caseDeclination('karta'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "sentaku", pl: caseDeclination('pranie'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "souji", pl: caseDeclination('porządki'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "tegami", pl: caseDeclination('list'), counter: 'mai', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "zasshi", pl: caseDeclination('czasopismo'), counter: 'satsu', plGender: 'n', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "shinbun", pl: caseDeclination('gazeta'), counter: 'satsu', plGender: 'ż', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "hon", pl: caseDeclination('książka'), counter: 'satsu', plGender: 'ż', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "NOOTO", pl: caseDeclination('zeszyt'), counter: 'satsu', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "enpitsu", pl: caseDeclination('ołówek'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "mannenhitsu", pl: caseDeclination('pióro'), counter: 'hon', plGender: 'n', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "BOORUPEN", pl: caseDeclination('długopis'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "kitte", pl: caseDeclination('znaczek'), counter: 'mai', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "kasa", pl: caseDeclination('parasol'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "KAPPU", pl: caseDeclination('kubek'), counter: 'bai', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "GURASU", pl: caseDeclination('szklanka'), counter: 'bai', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "KONPYUUTA", pl: caseDeclination('komputer'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
        { jp: "hana", pl: caseDeclination('kwiatek'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['items'] },
    ],
    notMaterial:[
        { jp: "oto", pl: caseDeclination('dźwięk'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['notMaterial'] },   
        { jp: "tenki", pl: caseDeclination('pogoda'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['notMaterial'] },   
    ],
    people:[
        { jp: "minna", pl: caseDeclination('wszyscy'), counter: '?', plGender: 'mo', isAlive: true, isHuman: true, tags: ['people'] },   
        { jp: "kata", pl: caseDeclination('osoba'), counter: '?', plGender: 'ż', isAlive: true, isHuman: true, tags: ['people'] },   
    ],
    vehicles: [
        { jp: "TAKUSHII", pl: caseDeclination('taksówka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['vehicles'] },
        { jp: 'densha', pl: caseDeclination('pociąg'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: 'TORAKKU', pl: caseDeclination('ciężarówka'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: 'BAN', pl: caseDeclination('van'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: 'BASU', pl: caseDeclination('autobus'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: 'shiden', pl: caseDeclination('tramwaj'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: "kuruma", pl: caseDeclination('samochód'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'wsiadać', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: "jitensha", pl: caseDeclination('rower'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'jechać', particle: 'ni', particlePl: { particle: 'na', casePl: 'N' }, tags: ['dedicated', 'in'] }, { verb: 'oriru', meaning: 'wysiadać', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'out'] },] },
        { jp: "uma", pl: caseDeclination('koń'), counter: 'tou', plGender: 'm', isAlive: false, isHuman: false, tags: ['vehicles'], collocations: [{ verb: 'noru', meaning: 'jechać', particle: 'ni', particlePl: { particle: 'na', casePl: 'N' }, tags: ['dedicated', 'in'] },] },
    ],
    places: [
        {
            jp: "machi", pl: caseDeclination('starówka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'],
        },
        {
            jp: "kyoushitsu", pl: caseDeclination('sala lekcyjna'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'], collocations: [
                { verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
                { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
                {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
                ]
        },
        {
            jp: "SUUPAA", pl: caseDeclination('supermarket'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'], collocations: [
                { verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
                { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
                {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
                ]
        },
        {
            jp: 'yama', pl: caseDeclination('góra'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'], collocations: [
                { verb: 'noboru', meaning: 'wspinać się', particle: 'ni', particlePl: { particle: 'na', casePl: 'N' }, tags: ['dedicated', 'in'] },
                { verb: 'deru', meaning: 'schodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
                {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'na',casePl:'B'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'na',casePl:'B'}}
              ]
        },
        {
            jp: 'HOTERU', pl: caseDeclination('hotel'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'tomaru', meaning: 'nocować', particle: 'ni', particlePl: { particle: 'w', casePl: 'Msc' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
        {
            jp: 'konbini', pl: caseDeclination('sklep całodobowy'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
                ]
        },
        { jp: "basho", pl: caseDeclination('miejsce'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['places'] },
        {
            jp: "tatemono", pl: caseDeclination('budynek'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] }, { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            ]
        },
        {
            jp: "ginkou", pl: caseDeclination('bank'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
        {
            jp: "ie", pl: caseDeclination('dom'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
        { jp: "tsukue", pl: caseDeclination('biurko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['places'] },
        {
            jp: "jimusho", pl: caseDeclination('biuro'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
        { jp: "hako", pl: caseDeclination('pudełko'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'] },
        {
            jp: "gakko", pl: caseDeclination('szkoła'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
                ]
        },
        { jp: "daigaku", pl: caseDeclination('uniwersytet'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'] },
        {
            jp: "yuubinkyoku", pl: caseDeclination('urząd pocztowy'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
        {
            jp: "toshokan", pl: caseDeclination('biblioteka'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
                {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
                ]
        },
        {
            jp: "kaigishitsu", pl: caseDeclination('sala konferencyjna'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['places'], collocations: [{ verb: 'ireru', meaning: 'wchodzić', particle: 'ni', particlePl: { particle: 'do', casePl: 'D' }, tags: ['dedicated', 'in'] },
            { verb: 'deru', meaning: 'wychodzić', particle: 'o', particlePl: { particle: 'z', casePl: 'D' }, tags: ['dedicated', 'in'] },
            {verb:'iku',meaning:'iść',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kaeru',meaning:'wracać',particle:'ni',particlePl:{particle:'do',casePl:'D'}},
            {verb:'kuru',meaning:'przyjść',particle:'ni',particlePl:{particle:'do',casePl:'D'}}
          ]
        },
    ],
    food: [
        { jp: "hachimitsu", pl: caseDeclination('miód'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "SANDOITCHI", pl: caseDeclination('kanapka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "PIZA", pl: caseDeclination('pizza'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "mizu", pl: caseDeclination('woda'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "ORENJI", pl: caseDeclination('pomarańcza'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "CHOKOREETO", pl: caseDeclination('czekolada'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "KOORA", pl: caseDeclination('cola'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "KOOHII", pl: caseDeclination('kawa'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "koucha", pl: caseDeclination('czarna herbata'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "ocha", pl: caseDeclination('zielona herbata'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "gyuunyuu", pl: caseDeclination('mleko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "ringo", pl: caseDeclination('jabłko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "KEEKI", pl: caseDeclination('ciasto'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "BIIRU", pl: caseDeclination('piwo'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "WAIN", pl: caseDeclination('wino'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "AISUKURIIMU", pl: caseDeclination('lody'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "BANANA", pl: caseDeclination('banan'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "JUUSU", pl: caseDeclination('sok'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['food', 'drink'] },
        { jp: "gohan", pl: caseDeclination('ryż'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['food'] },
        { jp: "hachimitsu", pl: caseDeclination('miód'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['food'] },
    ],
    body: [
        { jp: "kami-no ke", pl: caseDeclination('włos'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "mayuge", pl: caseDeclination('brew'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "mimi", pl: caseDeclination('ucho'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "hige", pl: caseDeclination('broda [zarost]'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "kuchi", pl: caseDeclination('usta'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "kubi", pl: caseDeclination('szyja'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "kami", pl: caseDeclination('włosy'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "me", pl: caseDeclination('oko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "hana", pl: caseDeclination('nos'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "mune", pl: caseDeclination('pierś [klatka piersiowa]'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "onaka/hara", pl: caseDeclination('brzuch'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "ashi", pl: caseDeclination('noga'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "hiza", pl: caseDeclination('kolano'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "kakato", pl: caseDeclination('pięta'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "atama", pl: caseDeclination('głowa'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "kata", pl: caseDeclination('ramię'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "ude", pl: caseDeclination('plecy'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "te", pl: caseDeclination('ręka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "yubi", pl: caseDeclination('palec'), counter: '?', plGender: 'm', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "oshiri", pl: caseDeclination('pupa'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "shiri", pl: caseDeclination('dupa'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "momo", pl: caseDeclination('udo'), counter: '?', plGender: 'n', isAlive: false, isHuman: false, tags: ['body'] },
        { jp: "fukurahagi", pl: caseDeclination('łydka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false, tags: ['body'] },
    ],

}
export const nounsKeyMatrix = init(nouns)
export function dict(key: string, trans: string) {
    //plants
    //food
    //furnitures big and small, things in home
    //electronic devices
    //people
    //animals
    const dict = [
        //plants
        {
            key: 'hana',
            romaji: 'hana',
            kana: 'はな',
            kanji: '花',
            translation: {
                pl: 'kwiat'
            }
        },
        //food
        {
            key: 'hachimitsu',
            romaji: 'hachimitsu',
            kana: 'はちみつ',
            kanji: '蜂蜜',
            translation: {
                pl: 'miód'
            }
        },
        //furnitures big and small, things in home
        {
            key: 'tsukue',
            romaji: 'tsukue',
            kana: 'つくえ',
            kanji: '机',
            translation: {
                pl: 'biurko'
            }
        },
        {
            key: 'TEEBURU',
            romaji: 'TEEBURU',
            kana: 'テーブル',
            kanji: '-',
            translation: {
                pl: 'stół'
            }
        },
        {
            key: 'hako',
            romaji: 'hako',
            kana: 'はこ',
            kanji: '箱',
            translation: {
                pl: 'pudełko'
            }
        },
        {
            key: 'kasa',
            romaji: 'kasa',
            kana: 'かさ',
            kanji: '傘',
            translation: {
                pl: 'parasol'
            }
        },
        //electronic devices
        {
            key: 'KONPYUUTA',
            romaji: 'KONPYUUTA',
            kana: 'コンピュータ',
            kanji: '-',
            translation: {
                pl: 'komputer'
            }
        },
        //people
        {
            key: 'watashi',
            romaji: 'watashi',
            kana: 'わたし',
            kanji: '私',
            translation: {
                pl: 'ja'
            }
        },
        {
            key: 'anata',
            romaji: 'anata',
            kana: 'あなた',
            kanji: '-',
            translation: {
                pl: 'ty'
            }
        },
        {
            key: 'kare',
            romaji: 'kare',
            kana: 'かれ',
            kanji: '彼',
            translation: {
                pl: 'on'
            }
        },
        {
            key: 'kanojo',
            romaji: 'kanojo',
            kana: 'かのじょ',
            kanji: '彼女',
            translation: {
                pl: 'ona'
            }
        },
        //animals
        {
            key: 'neko',
            romaji: 'neko',
            kana: 'ねこ',
            kanji: '猫',
            translation: {
                pl: 'kot'
            }
        },
        {
            key: 'inu',
            romaji: 'inu',
            kana: 'いぬ',
            kanji: '犬',
            translation: {
                pl: 'pies'
            }
        },
        {
            key: 'nezumi',
            romaji: 'nezumi',
            kana: 'ネズミ',
            kanji: '鼠',
            translation: {
                pl: 'mysz'
            }
        },
        {
            key: 'suzume',
            romaji: 'suzume',
            kana: 'すずめ',
            kanji: '雀',
            translation: {
                pl: 'wróbel'
            }
        },
        {
            key: 'hato',
            romaji: 'hato',
            kana: 'はと',
            kanji: '鳩',
            translation: {
                pl: 'gołąb'
            }
        },
        {
            key: 'ka',
            romaji: 'ka',
            kana: 'か',
            kanji: '蚊',
            translation: {
                pl: 'komar'
            }
        },
        {
            key: 'MOSUKIITO',
            romaji: 'MOSUKIITO',
            kana: 'モスキート',
            kanji: '-',
            translation: {
                pl: 'komar'
            }
        },
        {
            key: 'sakana',
            romaji: 'sakana',
            kana: 'さかな',
            kanji: '魚',
            translation: {
                pl: 'ryba'
            }
        },
        {
            key: 'hachi',
            romaji: 'hachi',
            kana: 'はち',
            kanji: '蜂',
            translation: {
                pl: 'pszczoła / osa / szerszeń'
            }
        },
    ]
    return dictOutput(dict, key, trans)
}


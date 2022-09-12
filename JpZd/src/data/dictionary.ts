import { Case } from './../types/Case.model';
import Dict from "../types/Dict.model"
import Kanji from "../types/Kanji.model"
import WordList from '../types/WordList.model';
import Numbers from '../types/Numbers.model';

export function testowa(x:number,y:number):number{
    return x+y
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
export const adjectives = [
    { jp: 'se-ga takai', pl: 'wzrostem wysoki' },
    { jp: 'takai', pl: 'wysoki' },
    { jp: 'takai', pl: 'drogi' },
    { jp: 'se-ga hikui', pl: 'wzrostem niski' },
    { jp: 'hikui', pl: 'niski' },
    { jp: 'kireina', pl: 'fizycznie piękny' },
    { jp: 'utsukishii', pl: 'wewnętrznie i fizycznie piękny' },
    { jp: 'minikui', pl: 'brzydki' },
    { jp: 'warui', pl: 'zły' },
    { jp: 'yasui', pl: 'tani' },
    { jp: 'ookii', pl: 'duży' },
    { jp: 'chiisai', pl: 'mały' },
    { jp: 'atsui', pl: 'gorący' },
    { jp: 'chikai', pl: 'bliski' },
    { jp: 'yuumeina', pl: 'słynny' },
    { jp: 'yuumeina', pl: 'sławny' },
    { jp: 'tooi', pl: 'odległy' },
    { jp: 'hayai', pl: 'szybki' },
    { jp: 'osoi', pl: 'powolny' },
    { jp: 'atatakai', pl: 'w dotyku ciepły' },
    { jp: 'suzushii', pl: 'w dotyku zimny' },
    { jp: 'omoi', pl: 'ciężki' },
    { jp: 'karui', pl: 'lekki' },
    { jp: 'nagai', pl: 'długi' },
    { jp: 'mijikai', pl: 'krótki' },
    { jp: 'amai', pl: 'w smaku słodki' },
    { jp: 'karai', pl: 'w smaku ostry' },
    { jp: 'isogashii', pl: 'zajęty' },
    { jp: 'himana', pl: 'w sensie czasu wolny' },
]

export function declineAdjective(item: any, tense: string, negation: boolean, formal = true) {

    const isIadj = (item.jp.match(/na$/)) ? false : true
    if (isIadj) {
        return i_adjectivesTense(item.jp, formal, tense, negation)
    } else {
        return na_adjectivesTense(item.jp, formal, tense, negation)
    }
}

export function verbFormJp(verb: string, form: string): string {

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

    function extractMasuBase(verb: string): string {
        //exceptions
        if (verb.match(/suru$/)) return verb.replace(/suru$/, 'shi')
        if (verb.match(/su$/)) return verb.replace(/su$/, 'shi')
        if (verb === 'iru') return 'iri' //wzor pasuje, ale itnie 2 literu!
        if (verb === 'iku') return 'iki' //jw
        return isIchidandoshi ? verb.slice(0, -2) : verb.replace(/u$/, 'i')
    }

    switch (form) {
        case 'te':
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'e'
        case 'ta':
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'a'
        case 'masu':
            return extractTeTaBase(verb) + extractTeTaSuffix(verb) + 'a'
        case 'shou':
            return extractMasuBase(verb) + 'mashou'
        case 'masuBase':
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

export const verbForms = {
    te: 'te',
    ta: 'ta',
    masu: 'masu',
    shou: 'shou', //propozycja
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
    juu:{//dziesiatki
        '?':'nanjuu',
        '1':'juu',
        '2':'nijuu',
        '3':'sanjuu',
        '4':'yonjuu',
        '5':'gojuu',
        '6':'rokujuu',
        '7':'nanajuu',
        '8':'hachijuu',
        '9':'kyuujuu', 
        '10':'hyaku'   
    },
    hyaku:{//setki
        '?':'nanhyaku',
        '1':'hyaku',
        '2':'nihyaku',
        '3':'sanbyaku',
        '4':'yonhyaku',
        '5':'gohyaku',
        '6':'roppyaku',
        '7':'nanahyaku',
        '8':'happyaku',
        '9':'kyuuhyaku',    
        '10':'sen',    
    },
    sen:{//tysiace
        '?':'nansen',
        '1':'sen',
        '2':'nisen',
        '3':'sansen',
        '4':'yonsen',
        '5':'gosen',
        '6':'rokusen',
        '7':'nanasen',
        '8':'hachisen',
        '9':'kyuusen',    
        '10':'man',    
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
      sai:{//lata
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

    //    en:{//yen

    //  },
    nen:{//lata
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
}

export const verbs = {
    pool1: [
        { jp: 'miru', pl: { rozkazujący: 'zobaczmy', imieslowNiedokonany: 'widzenie', niedokonany: 'widzieć', dokonany: 'zobaczyć', os3: 'widzi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'kau', pl: { rozkazujący: 'kupmy', imieslowNiedokonany: 'kupowanie', niedokonany: 'kupować', dokonany: 'kupić', os3: 'kupuje' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'suru', pl: { rozkazujący: 'zróbmy', imieslowNiedokonany: 'robienie', niedokonany: 'robić', dokonany: 'zrobić', os3: 'robi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'neru', pl: { rozkazujący: 'śpijmy', imieslowNiedokonany: 'spanie', niedokonany: 'spać', dokonany: 'wyspać', os3: 'śpi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okiru', pl: { rozkazujący: 'budźmy', imieslowNiedokonany: 'budzenie', niedokonany: 'budzić', dokonany: 'obudzić', os3: 'budzi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okuru', pl: { rozkazujący: 'wyślijmy', imieslowNiedokonany: 'wysyłanie', niedokonany: 'wysyłać', dokonany: 'wysłać', os3: 'wysyła' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'deru', pl: { rozkazujący: 'wyjdźmy', imieslowNiedokonany: 'wychodzenie', niedokonany: 'wychodzić', dokonany: 'wyjść', os3: 'wychodzi' }, particle: { jp: 'o', pl: { txt: 'od/z', case: 'D' } } },
        { jp: 'iru', pl: { rozkazujący: 'potrzebujmy', imieslowNiedokonany: 'potrzebowanie', niedokonany: 'potrzebować', dokonany: 'potrzebować', os3: 'potrzebuje' }, particle: { jp: 'ga', pl: { txt: '', case: 'B' } } },
        { jp: 'iku', pl: { rozkazujący: 'chodźmy', imieslowNiedokonany: 'pójście', niedokonany: 'iść', dokonany: 'pójść', os3: 'idzie' }, particle: { jp: 'ni', pl: { txt: 'do', case: 'D' } } },
        { jp: 'oboeru', pl: { rozkazujący: 'zapamiętajmy', imieslowNiedokonany: 'zapamiętywanie', niedokonany: 'zapamiętywać', dokonany: 'zapamiętać', os3: 'pamięta' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'nakunaru', pl: { rozkazujący: 'zgubmy się', imieslowNiedokonany: 'gubienie się', niedokonany: 'gubić się', dokonany: 'zgubić się', os3: 'gubi się' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'nakusu', pl: { rozkazujący: 'zgubmy', imieslowNiedokonany: 'gubienie', niedokonany: 'gubić', dokonany: 'zgubić', os3: 'gubi' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'mitsukeru', pl: { rozkazujący: 'znajdźmy', imieslowNiedokonany: 'znajdowanie', niedokonany: 'znajdować', dokonany: 'znaleźć', os3: 'znajduje' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
    ]
}

export const wordList: WordList = {
    animals: [
        //kto co | kogo czego (nie ma) | komu czemu (się przyglądam) 
        // | kogo co (widzę) | z kim z czym (idę) | o kim o czym (mówię)
        // o! 
        { jp: 'neko', pl: caseDeclination('kot'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },//[{M:'kot'},{D:'kota'},{C:'kotu'},{B:'kota'},{N:'kotem'},{Msc:'o kocie'},{W:'kocie'}]},
        { jp: 'sakana', pl: caseDeclination('ryba'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },//[{ M: 'ryba' }, { D: 'ryby' }, { C: 'rybie' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'nezumi', pl: caseDeclination('mysz'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },//[{ M: 'mysz' }, { D: 'myszy' }, { C: 'myszy' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'ka', pl: caseDeclination('komar'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },// ['komar', 'komara', 'komarowi', ''] },
        { jp: 'hato', pl: caseDeclination('gołąb'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },//['gołąb', 'gołębia'] },
        { jp: 'suzume', pl: caseDeclination('wróbel'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['wróbel', 'wróbla'] },
        { jp: 'sou', pl: caseDeclination('słoń'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//['słoń', 'słonia'] },
        { jp: 'tori', pl: caseDeclination('ptak'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },//['ptak', 'ptaka'] },
        { jp: 'HAMUSUTAA', pl: caseDeclination('chomik'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },//['chomik', 'chomika'] },
        { jp: 'uma', pl: caseDeclination('koń'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//['koń', 'konia'] },
        { jp: 'ushi', pl: caseDeclination('krowa'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false },// ['krowa', 'krowy'] },
        { jp: 'niwatori', pl: caseDeclination('kura'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false },// ['kura', 'kury'] },
        { jp: 'ari', pl: caseDeclination('mrówka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },// ['mrówka', 'mrówki'] },
        { jp: 'shishiko', pl: caseDeclination('lew'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },// ['lew', 'lwa'] },
        { jp: 'inu', pl: caseDeclination('pies'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },
        { jp: 'saru', pl: caseDeclination('małpa'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },// ['małpa', 'małpy'] },
        { jp: 'usagi', pl: caseDeclination('królik'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['królik', 'królika'] },
        { jp: 'hitsuji', pl: caseDeclination('owca'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false },//['owca', 'owcy'] },
        { jp: 'buta', pl: caseDeclination('świnia'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false },// ['świnia', 'świni'] },
        { jp: 'jinchou', pl: caseDeclination('pingwin'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },//pl: ['pingwin', 'pingwina'] },
        { jp: 'ookami', pl: caseDeclination('wilk'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//['wilk', 'wilka'] },
        { jp: 'kuma', pl: caseDeclination('niedźwiedź'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//['niedźwiedź', 'niedźwiedzia'] },
        { jp: 'risu', pl: caseDeclination('wiewiórka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },//['wiewiórka', 'wiewiórka'] },
        { jp: 'washi', pl: caseDeclination('orzeł'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['orzeł', 'orła'] },
        { jp: 'taka', pl: caseDeclination('jastrząb'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['jastrząb', 'jastrzębia'] },
        { jp: 'wani', pl: caseDeclination('krokodyl'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//['krokodyl', 'krokodyla'] },
        { jp: 'shika', pl: caseDeclination('sarna'), counter: 'tou', plGender: 'ż', isAlive: true, isHuman: false },// ['sarna', 'sarny'] },
        { jp: 'inoshishi', pl: caseDeclination('dzik'), counter: 'tou', plGender: 'm', isAlive: true, isHuman: false },//  ['dzik', 'dzika'] },
        { jp: 'hae', pl: caseDeclination('mucha'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },// ['mucha', 'muchy'] },
        { jp: 'kitsune', pl: caseDeclination('lis'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },// pl: ['lis', 'lisa'] },
        { jp: 'harinezumi', pl: caseDeclination('jeż'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },// ['jeż', 'jeża'] },
        { jp: 'hiso', pl: caseDeclination('nietoperz'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['nietoperz', 'nietoperza'] },
        { jp: 'tonbo', pl: caseDeclination('ważka'), counter: 'hiki', plGender: 'ż', isAlive: true, isHuman: false },// ['ważka', 'ważki'] },
        { jp: 'kame', pl: caseDeclination('żółw'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },//  ['żółw', 'żółwia'] },
        { jp: 'hakuchou', pl: caseDeclination('łabędź'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },// ['łabędź'] },
        { jp: 'kamo', pl: caseDeclination('kaczka'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false },// ['kaczka'] },
        { jp: 'fukurou', pl: caseDeclination('sowa'), counter: 'wa', plGender: 'ż', isAlive: true, isHuman: false },//['sowa'] },
    ],
    myFamily: [
        { jp: "ani", pl: caseDeclination('starszy braciszek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "otouto", pl: caseDeclination('młodszy braciszek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "ane", pl: caseDeclination('starsza siostrzyczka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "imouto", pl: caseDeclination('młodsza siostrzyczka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "haha", pl: caseDeclination('mama'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "chichi", pl: caseDeclination('tata'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "kodomo", pl: caseDeclination('dzieciak'), counter: 'nin', plGender: 'n', isAlive: true, isHuman: true },
        { jp: "musuko", pl: caseDeclination('synek'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "musume", pl: caseDeclination('córcia'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "kanai", pl: caseDeclination('żonka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "shujin", pl: caseDeclination('mężuś'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },

    ],
    anotherFamily: [
        { jp: "oniisan", pl: caseDeclination('starszy brat'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "otoutosan", pl: caseDeclination('młodszy brat'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "oneesan", pl: caseDeclination('starsza siostra'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "imoutosan", pl: caseDeclination('młodsza siostra'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "okaasan", pl: caseDeclination('matka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "otoosan", pl: caseDeclination('ojciec'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "okosan", pl: caseDeclination('dziecko'), counter: 'nin', plGender: 'n', isAlive: true, isHuman: true },
        { jp: "musukosan", pl: caseDeclination('syn'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "musumesan", pl: caseDeclination('córa'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "okosan", pl: caseDeclination('żona'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "goshujin", pl: caseDeclination('mąż'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },

    ],
    professions: [
        { jp: "ban'nin", pl: caseDeclination('strażnik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: 'kangofu', pl: caseDeclination('pielęgniarka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: 'daigakusei', pl: caseDeclination('student'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: 'joshigakusei', pl: caseDeclination('studentka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: 'kyoushi', pl: caseDeclination('nauczyciel'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: 'isha', pl: caseDeclination('lekarz'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "kaisha'in", pl: caseDeclination('pracownik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "untenshu", pl: caseDeclination('kierowca'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "UEETORESU", pl: caseDeclination('kelnerka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "UEETAA", pl: caseDeclination('kelner'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "seibikou", pl: caseDeclination('mechanik'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "ENJINIA", pl: caseDeclination('inżynier'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "shufu", pl: caseDeclination('gospodyni'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "hisho", pl: caseDeclination('sekretarka'), counter: 'nin', plGender: 'ż', isAlive: true, isHuman: true },
        { jp: "keisatsukan", pl: caseDeclination('policjant'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "biyoushi", pl: caseDeclination('fryzjer'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
        { jp: "ten'in", pl: caseDeclination('sprzedawca'), counter: 'nin', plGender: 'm', isAlive: true, isHuman: true },
    ],
    items: [
        { jp: "hon", pl: caseDeclination('książka'), counter: 'satsu', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "NOOTOO", pl: caseDeclination('zeszyt'), counter: 'satsu', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "enpitsu", pl: caseDeclination('ołówek'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "mannenhitsu", pl: caseDeclination('pióro'), counter: 'hon', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "BOORUPEN", pl: caseDeclination('długopis'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "kitte", pl: caseDeclination('znaczek'), counter: 'mai', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "kasa", pl: caseDeclination('parasol'), counter: 'hon', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "KAPPU", pl: caseDeclination('kubek'), counter: 'bai', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "GURASU", pl: caseDeclination('szklanka'), counter: 'bai', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "kuruma", pl: caseDeclination('samochód'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "jitensha", pl: caseDeclination('rower'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "KONPYUUTA", pl: caseDeclination('komputer'), counter: 'dai', plGender: 'm', isAlive: false, isHuman: false },

    ],
    places: [
        { jp: "basho", pl: caseDeclination('miejsce'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "tatemono", pl: caseDeclination('budynek'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "ginkou", pl: caseDeclination('bank'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },

    ],
    food: [
        { jp: "hachimitsu", pl: caseDeclination('miód'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "SANDOITCHI", pl: caseDeclination('kanapka'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "PIZA", pl: caseDeclination('pizza'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "mizu", pl: caseDeclination('woda'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "ORENJI", pl: caseDeclination('pomarańcza'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "CHOKOREETO", pl: caseDeclination('czekolada'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "KOORA", pl: caseDeclination('cola'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "KOOHII", pl: caseDeclination('kawa'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "koucha", pl: caseDeclination('czarna herbata'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "ocha", pl: caseDeclination('zielona herbata'), counter: '?', plGender: 'ż', isAlive: false, isHuman: false },
        { jp: "gyuunyuu", pl: caseDeclination('mleko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "ringo", pl: caseDeclination('jabłko'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "KEEKI", pl: caseDeclination('ciasto'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "BIIRU", pl: caseDeclination('piwo'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "WAIN", pl: caseDeclination('wino'), counter: '?', plGender: 'n', isAlive: false, isHuman: false },
        { jp: "AISUKURIIMU", pl: caseDeclination('lody'), counter: '?', plGender: 'nmo', isAlive: false, isHuman: false },
        { jp: "BANANA", pl: caseDeclination('banan'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "JUUSU", pl: caseDeclination('sok'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },
        { jp: "gohan", pl: caseDeclination('ryż'), counter: '?', plGender: 'm', isAlive: false, isHuman: false },

    ]

}

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


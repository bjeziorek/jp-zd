import { Case } from './../types/Case.model';
import Dict from "../types/Dict.model"
import Kanji from "../types/Kanji.model"
import WordList from '../types/WordList.model';

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

function caseDeclination(word: string): Case {
    declineAdjective('','')
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

    console.log(word, lastLetter, secondLastLetter, endD)

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
        }
        console.log('typ1', wordObj)
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
            M: word,//jest krokodyl
            D: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'a', // nie ma krokodyl-a
            C: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'owi', //przyglądam się krokodyl-owi
            B: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'a', //widzę krokodyl-a
            N: word.replace(/k$/, 'ki').replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'em', //z krokodyl-em
            Msc: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'u', //o krokodyl-u
            W: word.replace(/ąb$/, 'ębi').replace(/w$/, 'wi').replace(/dź$/, 'dzi').replace(/ń$/, 'ni').replace(/^wróbel/, 'wróbl') + 'u', //o! krokodyl-u 
        }
        console.log('typ2a', wordObj)
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
        }
        console.log('typ2b ------ ', wordObj)
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
        }
        console.log('typ3', wordObj)
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
        }
        console.log('typ -ca', wordObj)
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
        }
        console.log('typ -nia/-yni', wordObj)
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
        }
        console.log('typ mysz', wordObj)
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
    }
    console.log('unknown case pattern for: ' + word, wordObj2)
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
        }else{//negation
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
                return word.slice(0, -2)+' deshita'
            } else {//present, future
                return word.slice(0,-2)+' desu'
            }
        }else{//negation
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
    { jp: 'yuumei', pl: 'słynny' },
    { jp: 'yuumei', pl: 'sławny' },
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


export function declineAdjective(adjective: string, tense: string) {
    
    adjectives.forEach((item)=>{
        const isIadj=(item.jp.match(/na$/))?false:true
        if(isIadj){
        console.log(item.jp,item.pl,
            i_adjectivesTense(item.jp,true,'future',false),
            i_adjectivesTense(item.jp,true,'past',false),
            i_adjectivesTense(item.jp,true,'future',true),
            i_adjectivesTense(item.jp,true,'past',true)
            )
        }else{
            console.log(item.jp,item.pl,
                na_adjectivesTense(item.jp,true,'future',false),
                na_adjectivesTense(item.jp,true,'past',false),
                na_adjectivesTense(item.jp,true,'future',true),
                na_adjectivesTense(item.jp,true,'past',true)
                )
                
        }
    })
}



export const verbs = {
    pool1: [
        { jp: 'miru', pl: { niedokonany: 'widzieć', dokonany: 'zobaczyć' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'kau', pl: { niedokonany: 'kopować', dokonany: 'kupić' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'suru', pl: { niedokonany: 'robić', dokonany: 'zrobić' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'neru', pl: { niedokonany: 'spać', dokonany: 'wyspać' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okiru', pl: { niedokonany: 'budzić', dokonany: 'obudzić' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'okuru', pl: { niedokonany: 'wysyłać', dokonany: 'wysłać' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'deru', pl: { niedokonany: 'wychodzić', dokonany: 'wyjść' }, particle: { jp: 'o', pl: { txt: 'od/z', case: 'D' } } },
        { jp: 'iru', pl: { niedokonany: 'potrzebować', dokonany: 'potrzebować' }, particle: { jp: 'ga', pl: { txt: '', case: 'B' } } },
        { jp: 'iku', pl: { niedokonany: 'iść', dokonany: 'pójść' }, particle: { jp: 'ni', pl: { txt: 'do', case: 'D' } } },
        { jp: 'oboeru', pl: { niedokonany: 'zapamiętywać', dokonany: 'zapamiętać' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'nakunaru', pl: { niedokonany: 'gubić', dokonany: 'zgubić' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
        { jp: 'mitsukeru', pl: { niedokonany: 'znajdować', dokonany: 'znaleźć' }, particle: { jp: 'o', pl: { txt: '', case: 'B' } } },
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
        { jp: 'jinchou', pl: caseDeclination('pingwin'), counter: 'wa', plGender: 'm', isAlive: true, isHuman: false },//pl: ['pingwin', 'pingwina'] },
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
        { jp: 'hiso', pl: caseDeclination('nietoperz'), counter: 'hiki', plGender: 'm', isAlive: true, isHuman: false },// ['nietoperz', 'nietoperza'] },
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


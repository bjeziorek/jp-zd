import { Case } from './../types/Case.model';
import Dict from "../types/Dict.model"
import Kanji from "../types/Kanji.model"

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


function caseDeclination(type: number | string, word: string): Case {
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

export const wordList = {
    animals: [
        //kto co | kogo czego (nie ma) | komu czemu (się przyglądam) 
        // | kogo co (widzę) | z kim z czym (idę) | o kim o czym (mówię)
        // o! 
        { jp: 'neko', pl: caseDeclination(caseType['a u a em /cie /cie'], 'kot'), plGender: 'm', isAlive: true, isHuman: false },//[{M:'kot'},{D:'kota'},{C:'kotu'},{B:'kota'},{N:'kotem'},{Msc:'o kocie'},{W:'kocie'}]},
        { jp: 'sakana', pl: caseDeclination(caseType['y /ie /ę /ą /ie /o'], 'ryba'), plGender: 'ż', isAlive: true, isHuman: false },//[{ M: 'ryba' }, { D: 'ryby' }, { C: 'rybie' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'nezumi', pl: caseDeclination(caseType['y y x ą y o'], 'mysz'), plGender: 'ż', isAlive: true, isHuman: false },//[{ M: 'mysz' }, { D: 'myszy' }, { C: 'myszy' }, { B: 'rybę' }, { N: 'rybą' }, { Msc: 'rybie' }, { W: 'rybo' }] },
        { jp: 'ka', pl: caseDeclination(caseType['a owi a em ze ze'], 'komar'), plGender: 'm' },// ['komar', 'komara', 'komarowi', ''] },
        { jp: 'hato', pl: caseDeclination(caseType['(ą->ę) ia iowi ia iem iu iu'], 'gołąb'), plGender: 'm', isAlive: true, isHuman: false },//['gołąb', 'gołębia'] },
        { jp: 'suzume', pl: caseDeclination(caseType['(e->x) a owi a em u u'], 'wróbel'), plGender: 'm', isAlive: true, isHuman: false },// ['wróbel', 'wróbla'] },
        { jp: 'sou', pl: caseDeclination(caseType['(ń->n) ia iowi ia iem iu iu'], 'słoń'), plGender: 'm', isAlive: true, isHuman: false },//['słoń', 'słonia'] },
        { jp: 'tori', pl: caseDeclination(caseType['a owi a iem u u'], 'ptak'), plGender: 'm', isAlive: true, isHuman: false },//['ptak', 'ptaka'] },
        { jp: 'HAMUSUTAA', pl: caseDeclination(caseType['a owi a iem u u'], 'chomik'), plGender: 'm', isAlive: true, isHuman: false },//['chomik', 'chomika'] },
        { jp: 'uma', pl: caseDeclination(caseType['(ń->n) ia iowi ia iem iu iu'], 'koń'), plGender: 'm', isAlive: true, isHuman: false },//['koń', 'konia'] },
        { jp: 'ushi', pl: caseDeclination(caseType['y /ie /ę /ą /ie /o'], 'krowa'), plGender: 'ż', isAlive: true, isHuman: false },// ['krowa', 'krowy'] },
        { jp: 'niwatori', pl: caseDeclination(caseType['/y /ze /ę /ą /ze /o'], 'kura'), plGender: 'ż', isAlive: true, isHuman: false },// ['kura', 'kury'] },
        { jp: 'ari', pl: caseDeclination(caseType['/i /ce /ę /ą /ce /o'], 'mrówka'), plGender: 'ż', isAlive: true, isHuman: false },// ['mrówka', 'mrówki'] },
        { jp: 'shishiko', pl: caseDeclination(caseType['(e->x) a u a em ie ie'], 'lew'), plGender: 'm', isAlive: true, isHuman: false },// ['lew', 'lwa'] },
        { jp: 'inu', pl: caseDeclination(caseType['(ie->x) a u a em ie ie'], 'pies'), plGender: 'm', isAlive: true, isHuman: false },
        { jp: 'saru', pl: caseDeclination(caseType['y /ie /ę /ą /ie /o'], 'małpa'), plGender: 'm', isAlive: true, isHuman: false },// ['małpa', 'małpy'] },
        { jp: 'usagi', pl: caseDeclination(caseType['a owi a iem u u'], 'królik'), plGender: 'm', isAlive: true, isHuman: false },// ['królik', 'królika'] },
        { jp: 'hitsuji', pl: caseDeclination(caseType['/y /y /ę /ą /y /o'], 'owca'), plGender: 'ż', isAlive: true, isHuman: false },//['owca', 'owcy'] },
        { jp: 'buta', pl: caseDeclination(caseType['/ / /ę /ą / /o'], 'świnia'), plGender: 'ż', isAlive: true, isHuman: false },// ['świnia', 'świni'] },
        { jp: 'jinchou', pl: caseDeclination(caseType['a owi a em ie ie'], 'pingwin'), plGender: 'm', isAlive: true, isHuman: false },//pl: ['pingwin', 'pingwina'] },
        { jp: 'ookami', pl: caseDeclination(caseType['a owi a iem u u'], 'wilk'), plGender: 'm' },//['wilk', 'wilka'] },
        { jp: 'kuma', pl: caseDeclination(caseType['(ź->z) ia iowi ia iem iu iu'], 'niedźwiedź'), plGender: 'm', isAlive: true, isHuman: false },//['niedźwiedź', 'niedźwiedzia'] },
        { jp: 'risu', pl: caseDeclination(caseType['/i /ce /ę /ą /ce /o'], 'wiewiórka'), plGender: 'ż', isAlive: true, isHuman: false },//['wiewiórka', 'wiewiórka'] },
        { jp: 'washi', pl: caseDeclination(caseType['()()((l)) a owi a em e e'], 'orzeł'), plGender: 'm', isAlive: true, isHuman: false },// ['orzeł', 'orła'] },
        { jp: 'taka', pl: caseDeclination(caseType['(ą->ę) ia iowi ia iem iu iu'], 'jastrząb'), plGender: 'm', isAlive: true, isHuman: false },// ['jastrząb', 'jastrzębia'] },
        { jp: 'wani', pl: caseDeclination(caseType['a owi a em u u'], 'krokodyl'), plGender: 'm', isAlive: true, isHuman: false },//['krokodyl', 'krokodyla'] },
        { jp: 'shika', pl: caseDeclination(caseType['/y /ie /ę /ą /ie /o'], 'sarna'), plGender: 'ż', isAlive: true, isHuman: false },// ['sarna', 'sarny'] },
        { jp: 'inoshishi', pl: caseDeclination(caseType['a owi a iem u u'], 'dzik'), plGender: 'm', isAlive: true, isHuman: false },//  ['dzik', 'dzika'] },
        { jp: 'hae', pl: caseDeclination(caseType['/y /sze /ę /ą /sze /o'], 'mucha'), plGender: 'ż', isAlive: true, isHuman: false },// ['mucha', 'muchy'] },
        { jp: 'kitsune', pl: caseDeclination(caseType['a owi a em ie ie'], 'lis'), plGender: 'm', isAlive: true, isHuman: false },// pl: ['lis', 'lisa'] },
        { jp: 'harinezumi', pl: caseDeclination(caseType['a owi a em u u'], 'jeż'), plGender: 'm', isAlive: true, isHuman: false },// ['jeż', 'jeża'] },
        { jp: 'hiso', pl: caseDeclination(caseType['a owi a em u u'], 'nietoperz'), plGender: 'm', isAlive: true, isHuman: false },// ['nietoperz', 'nietoperza'] },
        { jp: 'tonbo', pl: caseDeclination(caseType['/i /ce /ę /ą /ce /o'], 'ważka'), plGender: 'ż', isAlive: true, isHuman: false },// ['ważka', 'ważki'] },
        { jp: 'kame', pl: caseDeclination(caseType['ia iowi ia iem iu iu'], 'żółw'), plGender: 'm', isAlive: true, isHuman: false },//  ['żółw', 'żółwia'] },
        { jp: 'hakuchou', pl: caseDeclination(caseType['(ź->z) ia iowi ia iem iu iu'], 'łabędź'), plGender: 'm', isAlive: true, isHuman: false },// ['łabędź'] },
        { jp: 'kamo', pl: caseDeclination(caseType['/i /ce /ę /ą /ce /o'], 'kaczka'), plGender: 'ż', isAlive: true, isHuman: false },// ['kaczka'] },
        { jp: 'fukurou', pl: caseDeclination(caseType['y /ie /ę /ą /ie /o'], 'sowa'), plGender: 'ż', isAlive: true, isHuman: false },//['sowa'] },
    ],
    people: [

    ],
    places: [

    ],
    food: [

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


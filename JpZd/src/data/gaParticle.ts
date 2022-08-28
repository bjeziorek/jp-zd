import DataType from '../types/DataType.model';
import { pickThemePool } from '../utils/pickTheme';
import rand from '../utils/randomArrayElement';

let whatPool = [
    { jp: 'nihongo', pl: 'japońskim' },
    { jp: 'eigo', pl: 'angielskim' },
    { jp: 'ryouri', pl: 'gotowaniu' },
    { jp: 'ryouri-o tsukuru', pl: 'gotowaniu posiłków' },
    { jp: 'asobi', pl: 'zabawie' },
    { jp: 'SUPOOTSU', pl: 'sporcie' },
    { jp: 'kanji-o oboeru', pl: 'zapamiętywaniu kanji' },
    { jp: 'PIANO', pl: '(graniu na) pianinie' },
    { jp: 'GITAA', pl: '(graniu na) gitarze' },
    { jp: 'e-o kaku', pl: 'rysowaniu obrazów' },
]

export function likeDislike(theme: string): DataType {
    const verbList = [
        { jp: 'suki', pl: 'lubi' },
        { jp: 'kirai', pl: 'nie lubi' },
    ]
    const obj1 = rand(pickThemePool(theme))
    const obj2 = rand(pickThemePool(theme))
    const verb = rand(verbList)

    return {
        romaji: obj1.jp + '-wa ' + obj2.jp + '-ga ' + verb.jp + ' desu',
        meaning: `${obj1.pl.M} ${verb.pl} ${(verb.jp === 'suki') ? obj2.pl.B : obj2.pl.D}`
    }
}

export function goodBadAt(theme: string): DataType {
    const verbList = [
        { jp: 'jouzu', pl: 'dobry' },
        { jp: 'heta', pl: 'słaby' },
    ]

    function genderSetter(gender: string, text: string): string {
        console.log(text, gender)
        switch (gender) {
            case 'ż': return text.slice(0, -1) + 'a'
            case 'n': return text.slice(0, -1) + 'e'
            default: return text
        }

    }

    const obj1 = rand(pickThemePool(theme))
    const what = rand(whatPool)
    const verb = rand(verbList)

    return {
        romaji: obj1.jp + '-wa ' + what.jp + '-ga ' + verb.jp + ' desu',
        meaning: obj1.pl.M + ' jest ' + genderSetter(obj1.plGender, verb.pl) + ' w ' + what.pl
    }
}

//aruImasu

//itai

//wakaru

export function needWantHave(theme: string): DataType {
    const verbList = [
        { jp: 'irimasu', pl: 'potrzebuje' },
        { jp: 'hoshii', pl: 'chce' },
        { jp: 'imasu/arimasu', pl: 'ma' },
    ]



    let randAnimal = rand(pickThemePool(theme))
    const whatWantPool = [
        { jp: 'neko', pl: ['kot', 'kotem'] },
        { jp: 'PIANO', pl: { potrzebuje: 'pianina', chce: 'pianino', ma: 'pianino' } },
        { jp: 'GITAA', pl: { potrzebuje: 'gitary', chce: 'gitarę', ma: 'gitarę' } },
        { jp: 'okane', pl: { potrzebuje: 'pieniędzy', chce: 'pieniędzy', ma: 'pieniądze' } },
        { jp: 'ginkou', pl: { potrzebuje: 'banku', chce: 'bank', ma: 'bank' } },
        { jp: 'kyoushitsu', pl: { potrzebuje: 'sali lekcyjnej', chce: 'salę lekcyjną', ma: 'salę lekcyjną' } },
        { jp: 'EREBEETAA', pl: { potrzebuje: 'windy', chce: 'windę', ma: 'windę' } },
        { jp: 'otearai', pl: { potrzebuje: 'łazienki', chce: 'łazienkę', ma: 'łazienkę' } },
        { jp: 'TOIRE', pl: { potrzebuje: 'toalety', chce: 'toaletę', ma: 'toaletę' } },
        { jp: 'yakkyouku', pl: { potrzebuje: 'apteki', chce: 'aptekę', ma: 'aptekę' } },
        { jp: 'APAATO', pl: { potrzebuje: 'mieszkania', chce: 'mieszkanie', ma: 'mieszkanie' } },
        { jp: 'basho', pl: { potrzebuje: 'miejsca', chce: 'miejsce', ma: 'miejsce' } },
        { jp: 'hikoujo', pl: { potrzebuje: 'lotniska (dowolnego)', chce: 'lotnisko (dowolne)', ma: 'lotnisko (dowolne)' } },
        { jp: 'kuukou', pl: { potrzebuje: 'lotniska (komercyjnego)', chce: 'lotnisko (komercyjnego)', ma: 'lotnisko (komercyjne)' } },
        { jp: 'tokoro', pl: { potrzebuje: 'miejsca zamieszkania', chce: 'miejsca zamieszkania', ma: 'miejsce zamieszkania' } },
        { jp: 'ike', pl: { potrzebuje: 'stawu', chce: 'staw', ma: 'staw' } },
        { jp: 'kouban', pl: { potrzebuje: 'posterunku policji', chce: 'posterunek policji', ma: 'posterunek policji' } },
        { jp: 'NOOTOO', pl: { potrzebuje: 'zeszytu', chce: 'zeszyt', ma: 'zeszyt' } },
        { jp: 'BOORUPEN', pl: { potrzebuje: 'długopisu', chce: 'długopis', ma: 'długopis' } },
        { jp: 'hon', pl: { potrzebuje: 'książki', chce: 'książkę', ma: 'książkę' } },
        { jp: 'zasshi', pl: { potrzebuje: 'czasopisma', chce: 'czasopismo', ma: 'czasopismo' } },
        { jp: 'kippu', pl: { potrzebuje: 'biletu', chce: 'bilet', ma: 'bilet' } },
        { jp: 'sekken', pl: { potrzebuje: 'mydła', chce: 'mydło', ma: 'mydło' } },
        { jp: 'jitensha', pl: { potrzebuje: 'roweru', chce: 'rower', ma: 'rower' } },
        { jp: 'sanpo', pl: { potrzebuje: 'spaceru', chce: 'spacer', ma: 'spacer' } },
        { jp: 'kusuri', pl: { potrzebuje: 'lekarstwa', chce: 'lekarstwo', ma: 'lekarstwo' } },
        { jp: 'gyuuniku', pl: { potrzebuje: 'wołowiny', chce: 'wołowinę', ma: 'wołowinę' } },
        { jp: 'toriniku', pl: { potrzebuje: 'drobiu', chce: 'drób', ma: 'drób' } },
        { jp: 'gyuunyuu', pl: { potrzebuje: 'mleka', chce: 'mleko', ma: 'mleko' } },
        { jp: 'kudamono', pl: { potrzebuje: 'owocu', chce: 'owoc', ma: 'owoc' } },
        { jp: 'kitte', pl: { potrzebuje: 'znaczka na list', chce: 'znaczek na list', ma: 'znaczek na list' } },
        { jp: randAnimal.jp, pl: { potrzebuje: randAnimal.pl.D, chce: randAnimal.pl.B, ma: randAnimal.pl.B } },
    ]

    for (let i = 0; i < 9; i++) {
        randAnimal = rand(pickThemePool(theme))
        whatWantPool.push({ jp: randAnimal.jp, pl: { potrzebuje: randAnimal.pl.D, chce: randAnimal.pl.B, ma: randAnimal.pl.B } },)
    }

    const obj1 = rand(pickThemePool(theme))
    const what = rand(whatWantPool)
    const verb = rand(verbList)

    return {
        romaji: obj1.jp + '-wa ' + what.jp + '-ga ' + verb.jp,
        meaning: obj1.pl.M + ' ' + verb.pl + ' ' + what.pl[verb.pl]
    }
}

export function can(theme: string): DataType {

    const dekiruPool = [
        { jp: 'dekimasu', pl: 'potrafi [grz.]' },
        { jp: 'dekiru', pl: 'potrafi [pot.]' },
        { jp: 'dekimasen', pl: 'nie potrafi [grz.]' },
        { jp: 'dekinai', pl: 'nie potrafi [pot.]' },
        { jp: 'dekimashita', pl: 'potrafił(a) [grz.]' },
        { jp: 'dekita', pl: 'potrafił(a) [pot.]' },
        { jp: 'dekimasendeshita', pl: 'nie potrafił(a) [grz.]' },
        { jp: 'dekinakatta', pl: 'nie potrafił(a) [pot.]' },
    ]

    const whatCanPool = [
        { jp: 'ryouri', pl: 'gotować' },
        { jp: 'eigo-o hanasu-koto', pl: 'mówić po angielsku' },
        { jp: 'jitensha-o noru-koto', pl: 'jeździć na rowerze' },
        { jp: 'shashin-o toru-koto', pl: 'robić zdjęcia' },
        { jp: 'kuruma-o unten-suru-koto', pl: 'prowadzić samochód' },
        { jp: 'oyogu-koto', pl: 'pływać' },

    ]

    const obj1 = rand(pickThemePool(theme))
    const what = rand(whatCanPool)
    const verb = rand(dekiruPool)

    return {
        romaji: obj1.jp + '-wa ' + what.jp + '-ga ' + verb.jp,
        meaning: obj1.pl.M + ' ' + verb.pl + ' ' + what.pl
    }
}
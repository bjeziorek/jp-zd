import DataType from "../../types/DataType.model";
import rand from "../../utils/randomArrayElement";

interface Letter {
    [key: string]: string
}

const latinToCyrylic: Letter = {
    'a': 'а',
    'ą': 'оу',
    'b': 'б',
    'c': 'ц',
    'ć': 'ці',
    'd': 'д',
    'e': 'е',
    'ę': 'еу',
    'f': 'ф',
    'g': 'г*',
    'h': 'г',
    'i': 'и',
    'j': 'й',
    'k': 'к',
    'l': 'л',
    'ł': 'л*',
    'm': 'м',
    'n': 'н',
    'ń': 'ні',
    'o': 'о',
    'ó': 'у*',
    'p': 'п',
    'r': 'р',
    's': 'с',
    'ś': 'сі',
    't': 'т',
    'u': 'у',
    'w': 'в',
    'y': 'і',
    'z': 'з',
    'ź': 'зі',
    'ż': 'ж',
    'ch': 'г**',
    'cz': 'ч',
    'dz': 'дз',
    'dź': 'дзі',
    'dż': 'дж',
    'drz': 'дж*',
    'rz': 'ж*',
    'sz': 'ш',
}

const cyrylicToLatin: Letter = {
    'й': 'j',
    'ц': 'c',
    'у': 'u',
    'к': 'k',
    'е': 'e',
    'н': 'n',
    'г': 'h',
    'ш': 'sz',
    'щ': 'szcz',
    'з': 'z',
    'х': 'h',
    'ї': 'jy',
    'ф': 'f',
    'і': 'i',
    'в': 'w',
    'а': 'a',
    'п': 'p',
    'р': 'r',
    'о': 'o',
    'л': 'l',
    'д': 'd',
    'ж': 'ż',
    'є': 'je',
    'я': 'ja',
    'ч': 'cz',
    'с': 's',
    'м': 'm',
    'и': 'y',
    'т': 't',
    'ь': '^',
    'б': 'b',
    'ю': 'ju',
}

function transcription(text: string, source: any): string {
    let output = ''
    const splitted = text.split('')
    splitted.forEach(element => {
        output += (source[element]) ? source[element] : element
    });
    return output
}

const uaDictionary = [
    { pl: 'kot', ua: 'kit' },
    { pl: 'papuga', ua: 'papuha' },
    { pl: 'pies', ua: 'sobaka' },
]

export interface UaType {
    uaLatin: string,
    uaCyrylic: string,
    plLatin: string,
    plCyrylic: string,
}

export function cases(theme: string): UaType {
    console.log('test')
    return thisIs(theme)
}

export function thisIs(theme: string): UaType {

    const who = rand(uaDictionary)
    const uaLatin = 'ce ' + who.ua
    const plLatin = 'to jest ' + who.pl

    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
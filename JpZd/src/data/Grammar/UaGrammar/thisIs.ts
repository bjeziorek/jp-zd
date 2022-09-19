import DataType from "../../../types/DataType.model";
import rand from "../../../utils/randomArrayElement";

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
    'g': 'ґ',
    'h': 'г',
    'i': 'і',
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
    'y': 'и',
    'z': 'з',
    'ź': 'зі',
    'ż': 'ж',
    'ch': 'х',
    'cz': 'ч',
    'dz': 'дз',
    'dź': 'дзі',
    'dż': 'дж',
    'drz': 'дж*',
    'rz': 'ж*',
    'sz': 'ш',
    'szcz': 'щ',
    'ja': 'я',
    'je': 'є',
    'ju': 'ю',
    'ji': 'ї',
    '^': 'ь',
}

const cyrylicToLatin: Letter = {
    'й': 'j',
    'ц': 'c',
    'у': 'u',
    'к': 'k',
    'е': 'e',
    'н': 'n',
    'г': 'h',
    'ґ': 'g',
    'ш': 'sz',
    'щ': 'szcz',
    'з': 'z',
    'х': 'ch',
    'ї': 'ji',
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
    text=text.replace(/szcz/g, latinToCyrylic.szcz)
    text=text.replace(/ch/g, latinToCyrylic.ch)
    text=text.replace(/cz/g, latinToCyrylic.cz)
    text=text.replace(/dz/g, latinToCyrylic.dz)
    text=text.replace(/dź/g, latinToCyrylic.dź)
    text=text.replace(/drz/g, latinToCyrylic.drz)
    text=text=text.replace(/rz/g, latinToCyrylic.rz)
    text=text.replace(/sz/g, latinToCyrylic.sz)
    text=text.replace(/ja/g, latinToCyrylic.ja)
    text=text.replace(/je/g, latinToCyrylic.je)
    text=text.replace(/ju/g, latinToCyrylic.ju)
    text=text.replace(/ji/g, latinToCyrylic.ji)
    const splitted = text.split('')
    splitted.forEach(element => {
        output += (source[element]) ? source[element] : element
    });
    return output
}

const uaDictionary = [
    //zwierzątka
    { pl: 'kot', ua: 'kit' },
    { pl: 'papuga', ua: 'papuha' },
    { pl: 'pies', ua: 'sobaka' },
    //ciało
    { pl: 'szyja', ua: 'szyja' },
    { pl: 'ręka', ua: 'ruka' },
    { pl: 'noga', ua: 'noha' },
    { pl: 'kręgosłup', ua: 'chrebet' },
    { pl: 'skóra', ua: 'szkira' },
    { pl: 'ząb', ua: 'zub' },
    { pl: 'czoło', ua: 'lob' },
   // { pl: 'włosy', ua: 'wolossja' }, //--- mn
    { pl: 'palec', ua: 'palec^' },
    { pl: 'serce', ua: 'serce' },
    { pl: 'płuca', ua: 'leheni' },
    { pl: 'żołądek', ua: 'szlunok' },
    { pl: 'mózg', ua: 'mozok' },
    { pl: 'wątroba', ua: 'peczinka' },
    { pl: 'żyła', ua: 'wena' },
    { pl: 'krew', ua: 'krow' },
    { pl: 'gardło', ua: 'horlo' },
    { pl: 'kość', ua: 'kistka' },
    { pl: 'mięsień', ua: "m'jazy" },
    //ubrania
    { pl: 'bluza', ua: "bluza" },
    { pl: 'spódnica', ua: "spidnycja" },
    { pl: 'koszula', ua: "soroczka" },
    { pl: 'spodenki', ua: "szorty" },
    { pl: 'podkoszulek', ua: "majka" },
    { pl: 'skarpetki', ua: "szkarpetky" },
    
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
    uaDictionary.forEach(element => {
        console.log(element.pl,transcription( element.pl,latinToCyrylic),element.ua,transcription( element.ua,latinToCyrylic))
    });
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
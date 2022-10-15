
interface Letter {
    [key: string]: string
}

export const latinToCyrylic: Letter = {
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

export const cyrylicToLatin: Letter = {
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

export default function transcription(text: string, source: any): string {
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

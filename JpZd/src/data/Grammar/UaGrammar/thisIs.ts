import transcription, { latinToCyrylic } from "../../../UaUtils/transcription";
import rand from "../../../utils/randomArrayElement";
import { uaDictionary } from "./dictionaryUa";


export interface UaType {
    uaLatin: string,
    uaCyrylic: string,
    plLatin: string,
    plCyrylic: string,
}

export function cases(theme: string): UaType {
    return thisIs(theme)
}

export function thisIs(theme: string): UaType {
    uaDictionary.forEach(element => {
      //  console.log(element.pl, transcription(element.pl, latinToCyrylic), element.ua, transcription(element.ua, latinToCyrylic))
    });
    const who = rand(uaDictionary)
    const be = (who.plGender === 'mo' || who.plGender === 'nmo') ? 'są' : 'jest'
    const uaLatin = 'ce ' + who.ua
    const plLatin = 'to ' + be + ' ' + who.pl

    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
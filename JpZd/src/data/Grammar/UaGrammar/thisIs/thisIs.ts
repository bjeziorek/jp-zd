import { Theme } from './../../../../types/Theme.model';
import transcription, { latinToCyrylic } from "../../../../UaUtils/transcription";
import rand from "../../../../utils/randomArrayElement";
import { uaDictionary } from "../dictionaryUa";


export interface UaType {
    uaLatin: string,
    uaCyrylic: string,
    plLatin: string,
    plCyrylic: string,
}

export function thisIs(theme: Theme): UaType {
    uaDictionary.forEach(element => {
      //  console.log(element.pl, transcription(element.pl, latinToCyrylic), element.ua, transcription(element.ua, latinToCyrylic))
    });
    const yesNo=rand([
        {ua:'tak',inUa:'',pl:'tak',inPl:''},
        {ua:'ni',inUa:'ne',pl:'nie',inPl:'nie'},
    ])
    const who = rand(uaDictionary)
    const be = (who.plGender === 'mo' || who.plGender === 'nmo') ? 'są' : 'jest'
    const uaLatin = 'ce ' + who.ua+'? '+yesNo.ua+', ce '+yesNo.inUa+' '+who.ua
    const plLatin = 'to ' + be + ' ' + who.pl+'? '+yesNo.pl+', to '+yesNo.inPl+' '+be+' '+who.pl

    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
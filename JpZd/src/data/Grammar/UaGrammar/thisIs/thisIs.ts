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
   
    const yesNo=rand([
        {ua:'tak',inUa:'',pl:'tak',inPl:''},
        {ua:'ni',inUa:'ne',pl:'nie',inPl:'nie'},
    ])
    const who = rand(uaDictionary)
    const what2 = rand(uaDictionary.filter(el=>{return el.pl!==who.pl}))
    const be = (who.plGender === 'mo' || who.plGender === 'nmo') ? 'są' : 'jest'
    const extraAnswerUa=(yesNo.ua==='ni')?(', ce '+what2.ua):''
    const extraAnswerPl=(yesNo.ua==='ni')?(', to jest '+what2.pl):''
    

    const uaLatin = 'skażit^, bud^ laska, szczo ce? ce ' + who.ua+'? '+yesNo.ua+', ce '+yesNo.inUa+' '+who.ua+extraAnswerUa
    const plLatin = 'powiedz proszę, co to jest? to ' + be + ' ' + who.pl+'? '+yesNo.pl+', to '+yesNo.inPl+' '+be+' '+who.pl+extraAnswerPl

    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
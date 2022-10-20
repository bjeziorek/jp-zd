import { Theme } from './../../../../types/Theme.model';
import transcription, { latinToCyrylic } from "../../../../UaUtils/transcription";
import rand from "../../../../utils/randomArrayElement";
import { UaType } from "../thisIs/thisIs";

export function sbName(theme: Theme): UaType{
    const who=rand([
    {ua:'jiji',pl:'ona',plV:'nazywa'},
    {ua:'joho',pl:'on',plV:'nazywa'},
    {ua:'was',pl:'Pan/Pani/wy',plV:'nazywa/nazywacie'},
    {ua:'meni',pl:'ja',plV:'nazywam'},
    {ua:'tebe',pl:'ty',plV:'nazywasz'},
    ])

    
    const uaLatin =  'jak ' + who.ua+' zwaty'
    const plLatin = 'jak ' + who.pl + ' się ' + who.plV

    return{
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic) 
    }
}
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { convertNumberToText } from '../../../numbers';

export function speakLanguage(theme:string):DataType{
    const who:NounStructure=rand(pickTheme(theme))
    const n= Math.ceil(Math.random()*10)
    const lang:NounStructure = rand(pickTheme('languages'))
    return {
        romaji:who.jp+'-wa '+convertNumberToText(n,'nin')+'-de '+lang.jp+'-de hanasemasu',
        meaning:who.pl.M+' rozmawiają w '+n+ ' w '+lang.pl.Msc
    }
}
import { persons } from './../dictionaryUa';
import { latinToCyrylic } from './../../../../UaUtils/transcription';
import { UaType } from './../thisIs/thisIs';
import { Theme } from './../../../../types/Theme.model';
import transcription from '../../../../UaUtils/transcription';
import { uaVerbs } from '../verbs';
import rand from '../../../../utils/randomArrayElement';
import { getKeyList } from '../../../../UaUtils/getKeyList';
export function together(theme:Theme):UaType{

const we = persons.filter(el=>el.pl==='my')[0]
const verb = uaVerbs[rand(getKeyList(uaVerbs))]

const pl=we.pl+' razem '+verb.pl.declination.present.my_mo
const ua=we.ua+' razom '+verb.ua.declination.present.my_mo

return{
    plCyrylic:transcription(pl,latinToCyrylic),
    plLatin:pl,
    uaCyrylic:transcription(ua,latinToCyrylic),
    uaLatin:ua
}
}
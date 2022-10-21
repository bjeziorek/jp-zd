import { uaVerbs, UaVerb } from './../verbs';
import { uaDictionary } from './../dictionaryUa';
import { UaType } from './../thisIs/thisIs';
import { Theme } from './../../../../types/Theme.model';
import transcription, { latinToCyrylic } from '../../../../UaUtils/transcription';
import rand from '../../../../utils/randomArrayElement';
import { getKeys } from '../../../../utils/getKeys';
export function too(theme: Theme): UaType {

    const who = rand(uaDictionary)
    const verb:UaVerb = uaVerbs[rand(getKeys(uaVerbs))]

    const uaLatin = who.ua + ' takoż ' + uaVerbs.toWant.ua.declination.present.on + ' ' + verb.ua.infinitive
    const plLatin = who.pl + ' też chce ' + verb.pl.infinitive
    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
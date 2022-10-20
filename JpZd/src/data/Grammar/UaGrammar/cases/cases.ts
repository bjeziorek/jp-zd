import transcription, { latinToCyrylic } from '../../../../UaUtils/transcription';
import { UaType } from '../thisIs/thisIs';
import { Theme } from './../../../../types/Theme.model';
export function cases(theme: Theme): UaType {
    const uaLatin = ''
    const plLatin = ''

    return{
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic) 
    }

}
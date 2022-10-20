import { UaType } from './../thisIs/thisIs';
import { Theme } from './../../../../types/Theme.model';
import transcription, { latinToCyrylic } from '../../../../UaUtils/transcription';
import rand from '../../../../utils/randomArrayElement';
export function basicQuestion(theme:Theme):UaType{

    const question=rand([
        {ua:'chto ce? ce je',pl:'kto to jest? to jest'},
        {ua:'szczo ce?',pl:'co to jest?'},
        {ua:'chto win? win student',pl:'kim on jest? on jest studentem'},
        {ua:'chto wona? wona szkoljarka',pl:'kim ona jest? ona jest uczennicą'},
    ])

    const uaLatin =   question.ua
    const plLatin = question.pl

    return{
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
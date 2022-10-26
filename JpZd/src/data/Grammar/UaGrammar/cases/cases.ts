import { Case, CaseType } from './../../../../types/Case.model';
import { getKeyList } from '../../../../UaUtils/getKeyList';
import transcription, { latinToCyrylic } from '../../../../UaUtils/transcription';
import rand from '../../../../utils/randomArrayElement';
import { caseDeclination } from '../../../dictionary';
import { UaType } from '../thisIs/thisIs';
import { Theme } from './../../../../types/Theme.model';
export function cases(theme: Theme): UaType {


    function uaCaseDeclination1(str: string) {
        return {//sestra - siostra, kniżka - książka
            M: str,
            D: str.replace(/.$/, 'y'),
            C: str.replace(/.$/, 'i').replace(/ki$/, 'ci'),
            B: str.replace(/.$/, 'u'),
            N: str.replace(/.$/, 'oju'),
            Msc: str.replace(/.$/, 'i').replace(/ki$/, 'ci'),
            W: str.replace(/.$/, 'o')
        }
    }
    function uaCaseDeclination2(str: string) {
        const x= {//zemlja - ziemia, stancija - stacja
            M: str,
            D: str.replace(/ija$/, 'iji').replace(/ja$/, 'i'),
            C: str.replace(/ija$/, 'iji').replace(/ja$/, 'i'),
            B: str.replace(/ija$/, 'iju').replace(/ja$/,'ju'),
            N: str.replace(/ija$/, 'ieju').replace(/ja$/,'eju'),
            Msc: str.replace(/ija$/, 'iji').replace(/ja$/, 'i'),
            W: str.replace(/ija$/, 'ije').replace(/ja$/,'e')
        }
        console.log(x)
        return x
    }

    interface Declination{
        pl:Case,
        ua:Case
    }
    interface UaNouns{
        [key:string]:Declination
    }
    const nouns:UaNouns = {
        book: {
            pl: caseDeclination('książka'),
            ua: uaCaseDeclination1('kniżka')
        },
        sister: {
            pl: caseDeclination('siostra'),
            ua: uaCaseDeclination1('sestra')
        },
        soil:{
            pl: caseDeclination('ziemia'),
            ua: uaCaseDeclination2('zemlja')
        },
        station:{
            pl: caseDeclination('stacja'),
            ua: uaCaseDeclination2('stancija')
        }
    }
    const n=nouns['station']//rand(getKeyList(nouns))]
    const c:CaseType=rand(['M','D','C','B','N','Msc','W']) as CaseType
    const uaLatin = n.ua[c] as string
    const plLatin =( n.pl[c] as string )+' ['+c+']'

    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }

}
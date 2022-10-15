import DataType from "../../../types/DataType.model";
import transcription, { latinToCyrylic } from "../../../UaUtils/transcription";
import rand from "../../../utils/randomArrayElement";


const uaDictionary = [
    //zwierzątka
    { pl: 'kot', plGender: 'm', ua: 'kit' },
    { pl: 'papuga', plGender: 'ż', ua: 'papuha' },
    { pl: 'pies', plGender: 'm', ua: 'sobaka' },
    //ciało
    { pl: 'szyja', plGender: 'ż', ua: 'szyja' },
    { pl: 'ręka', plGender: 'ż', ua: 'ruka' },
    { pl: 'noga', plGender: 'ż', ua: 'noha' },
    { pl: 'kręgosłup', plGender: 'm', ua: 'chrebet' },
    { pl: 'skóra', plGender: 'ż', ua: 'szkira' },
    { pl: 'ząb', plGender: 'm', ua: 'zub' },
    { pl: 'czoło', plGender: 'n', ua: 'lob' },
    // { pl: 'włosy', ua: 'wolossja' }, //--- mn
    { pl: 'palec', plGender: 'm', ua: 'palec^' },
    { pl: 'serce', plGender: 'n', ua: 'serce' },
    { pl: 'płuca', plGender: 'nmo', ua: 'leheni' },
    { pl: 'żołądek', plGender: 'm', ua: 'szlunok' },
    { pl: 'mózg', plGender: 'm', ua: 'mozok' },
    { pl: 'wątroba', plGender: 'ż', ua: 'peczinka' },
    { pl: 'żyła', plGender: 'ż', ua: 'wena' },
    { pl: 'krew', plGender: 'ż', ua: 'krow' },
    { pl: 'gardło', plGender: 'n', ua: 'horlo' },
    { pl: 'mięsień', plGender: 'm', ua: "m'jazy" },
    //ubrania
    { pl: 'bluza', plGender: 'ż', ua: "bluza" },
    { pl: 'spódnica', plGender: 'ż', ua: "spidnycja" },
    { pl: 'koszula', plGender: 'ż', ua: "soroczka" },
    { pl: 'spodenki', plGender: 'nmo', ua: "szorty" },
    { pl: 'podkoszulek', plGender: 'm', ua: "majka" },
    { pl: 'skarpetki', plGender: 'nmo', ua: "szkarpetky" },

]

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
        console.log(element.pl, transcription(element.pl, latinToCyrylic), element.ua, transcription(element.ua, latinToCyrylic))
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
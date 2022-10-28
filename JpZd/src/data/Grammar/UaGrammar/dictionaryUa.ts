import { Theme } from "../../../types/Theme.model"
import { getKeyList } from "../../../UaUtils/getKeyList"
import transcription, { latinToCyrylic } from "../../../UaUtils/transcription"
import { UaType } from "./thisIs/thisIs"

export const uaDictionary = [
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

export const persons=[
{pl:'ja',ua:'ja'},
{pl:'ty',ua:'ty'},
{pl:'on',ua:'win'},
{pl:'ona',ua:'wona'},
{pl:'ono',ua:'ce'},
{pl:'my',ua:'my'},
{pl:'wy',ua:'wy'},
{pl:'oni',ua:'wony'},
{pl:'one',ua:'wony'},

]

export function listUaDictionary(theme: Theme): UaType {
    let pl=''
    let ua=''
    uaDictionary.forEach(el=>{
        ua+=transcription(el.ua,latinToCyrylic)+' '+el.pl+' ('+transcription(el.pl,latinToCyrylic)+')\n'
    })
    return{
        plCyrylic:ua,
        plLatin:'',
        uaCyrylic:'',
        uaLatin:''
    }
}
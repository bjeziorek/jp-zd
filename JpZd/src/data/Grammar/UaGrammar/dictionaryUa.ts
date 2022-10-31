import { Theme } from "../../../types/Theme.model"
import { caseD } from "../../../UaUtils/cases/cases"
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
    const x = ['ja będę pierwszego (dnia miesiąca)',
    'drugiego',
    'trzeciego',
    'czwartego',
    'piątego',
    'szóstego',
    'siódmego',
    'ósmego',
    'dziewiątego',
    'dziesiątego',
    'jedenastego',
    'dwunastego',
    'trzynastego',
    'czternastego',
    'piętnastego',
    'szesnastego',
    'siedemnastego',
    'osiemnastego',
    'dziewiętnastego',
    'dwudziestego',
    'dwudziestego pierwszego',
    'dwudziestego drugiego',
    'dwudziestego ...',
    'trzydziestego',
]
    let pl=''
    let ua=''
        
    x.forEach(el=>{
        ua+=el+' ('+transcription(el,latinToCyrylic)+') -- '
       // ua+=/*' ja ne maju '+caseD( el.ua)+' : '+*/transcription('ja ne maju '+caseD( el.ua),latinToCyrylic)+' ~~ '
    })
    return{
        plCyrylic:ua,
        plLatin:'',
        uaCyrylic:'',
        uaLatin:''
    }
}
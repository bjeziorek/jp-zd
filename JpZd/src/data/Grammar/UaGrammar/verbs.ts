import { persons } from './dictionaryUa';
import transcription, { latinToCyrylic } from "../../../UaUtils/transcription";
import rand from "../../../utils/randomArrayElement";



interface VerbPersons {
    [key:string]: string,
}

interface Declination {
    past:VerbPersons,
    present:VerbPersons,
    future:VerbPersons
}



interface Verbs {
    [key: string]: {
        ua:{
            declination:Declination
        }
        pl:{
            declination: Declination
        }

    }
}

export const verbs:Verbs = {
    toBe: {
        ua: {
            declination: {
                past: {
                    ja_ż: 'byla',
                    ja_m: 'byl',
                    ty_ż: '',
                    ty_m: '',
                    on: '',
                    ona: '',
                    ono: '',
                    my_nmo: '',
                    my_mo: '',
                    wy_nmo: '',
                    wy_mo: '',
                    oni: '',
                    one: '',
                },
                present: {
                    ja_ż: 'je',
                    ja_m: 'je',
                    ty_ż: 'je',
                    ty_m: 'je',
                    on: 'je',
                    ona: 'je',
                    ono: 'je',
                    my_nmo: 'je',
                    my_mo: 'je',
                    wy_nmo: 'je',
                    wy_mo: 'je',
                    oni: 'je',
                    one: 'je',
                },
                future: {
                    ja_ż: 'budu',
                    ja_m: 'budu',
                    ty_ż: 'budesz',
                    ty_m: 'budesz',
                    on: 'bude',
                    ona: 'bude',
                    ono: 'bude',
                    my_nmo: 'budemo',
                    my_mo: 'budemo',
                    wy_nmo: 'budete',
                    wy_mo: 'budete',
                    oni: 'budut^',
                    one: 'budut^',

                }
            }
        },
        pl: {
            declination: {
                past: {
                    ja_ż: 'byłam',
                    ja_m: 'byłem',
                    ty_ż: 'byłaś',
                    ty_m: 'byłeś',
                    on: 'był',
                    ona: 'była',
                    ono: 'było',
                    my_nmo: 'byłyśmy',
                    my_mo: 'byliśmy',
                    wy_nmo: 'byłyście',
                    wy_mo: 'byliście',
                    oni: 'byli',
                    one: 'były',
                },
                present: {
                    ja_ż: 'jestem',
                    ja_m: 'jestem',
                    ty_ż: 'jesteś',
                    ty_m: 'jesteś',
                    on: 'jest',
                    ona: 'jest',
                    ono: 'jest',
                    my_nmo: 'jesteśmy',
                    my_mo: 'jesteśmy',
                    wy_nmo: 'jesteście',
                    wy_mo: 'jesteście',
                    oni: 'są',
                    one: 'są',
                },
                future: {
                    ja_ż: 'będę',
                    ja_m: 'będę',
                    ty_ż: 'będziesz',
                    ty_m: 'będziesz',
                    on: 'będzie',
                    ona: 'będzie',
                    ono: 'będzie',
                    my_nmo: 'będziemy',
                    my_mo: 'będziemy',
                    wy_nmo: 'będziecie',
                    wy_mo: 'będziecie',
                    oni: 'będą',
                    one: 'będą',
                }
            }
        }
    },
}

export function practiceVerbs() {

    const person = rand([
        'ja_ż',
        'ja_m',
        'ty_ż',
        'ty_ż',
        'on',
        'ona',
        'ono',
        'my_nmo',
        'my_mo',
        'wy_nmo',
        'wy_mo',
        'oni',
        'one',
    ])

    const rightPerson=(()=>{
        return person.replace(/_m$/,'').replace(/_ż$/,'').replace(/_mo$/,'').replace(/_mno$/,'')
    })()

    console.log(person,verbs.toBe.pl.declination.future)

    const uaLatin = persons.filter(el=>{return el.pl===rightPerson})[0].ua + ' '+verbs.toBe.ua.declination.future[person]
    const plLatin = rightPerson + ' ' + verbs.toBe.pl.declination.future[person]
    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
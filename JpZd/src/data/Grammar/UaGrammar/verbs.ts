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
            infinitive:string,
            declination:Declination
        }
        pl:{
            infinitive:string,
            declination: Declination
        }

    }
}

export const verbs:Verbs = {
    toBe: {
        ua: {
            infinitive:'bity',
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
                future:{//present: {
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
                present:{//future: {
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
            infinitive:'być',
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
                future:{//present: {
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
                present:{//future: {
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
    toLearn: {
        ua: {
            infinitive:'wiwczaty',
            declination: {
                past: {
                    ja_ż: '',
                    ja_m: '',
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
                    ja_ż: 'wiwczaju',
                    ja_m: 'wiwczaju',
                    ty_ż: 'wiwczajesz',
                    ty_m: 'wiwczajesz',
                    on: 'wiwczaje',
                    ona: 'wiwczaje',
                    ono: 'wiwczaje',
                    my_nmo: 'wiwczajemo',
                    my_mo: 'wiwczajemo',
                    wy_nmo: 'wiwczajete',
                    wy_mo: 'wiwczajete',
                    oni: 'wiwczajut^',
                    one: 'wiwczajut^',
                },
                future: {
                    ja_ż: '',
                    ja_m: '',
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

                }
            }
        },
        pl: {
            infinitive:'uczyć się',
            declination: {
                past: {
                    ja_ż: 'uczyłam się',
                    ja_m: 'uczyłem się',
                    ty_ż: 'uczyłaś się',
                    ty_m: 'uczyłeś się',
                    on: 'uczył się',
                    ona: 'uczyła się',
                    ono: 'uczyło się',
                    my_nmo: 'uczyłyśmy się',
                    my_mo: 'uczyliśmy się',
                    wy_nmo: 'uczyłyście się',
                    wy_mo: 'uczyliście się',
                    oni: 'uczyli się',
                    one: 'uczyły się',
                },
                present: {
                    ja_ż: 'uczę się',
                    ja_m: 'uczę się',
                    ty_ż: 'uczysz się',
                    ty_m: 'uczysz się',
                    on: 'uczy się',
                    ona: 'uczy się',
                    ono: 'uczy się',
                    my_nmo: 'uczymy się',
                    my_mo: 'uczymy się',
                    wy_nmo: 'uczycie się',
                    wy_mo: 'uczycie się',
                    oni: 'uczą się',
                    one: 'uczą się',
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
    toRead: {
        ua: {
            infinitive:'czytaty',
            declination: {
                past: {
                    ja_ż: '',
                    ja_m: '',
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
                    ja_ż: 'czytaju',
                    ja_m: 'czytaju',
                    ty_ż: 'czytajesz',
                    ty_m: 'czytajesz',
                    on: 'czytaje',
                    ona: 'czytaje',
                    ono: 'czytaje',
                    my_nmo: 'czytajemo',
                    my_mo: 'czytajemo',
                    wy_nmo: 'czytajete',
                    wy_mo: 'czytajete',
                    oni: 'czytajut^',
                    one: 'czytajut^',
                },
                future: {
                    ja_ż: '',
                    ja_m: '',
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

                }
            }
        },
        pl: {
            infinitive:'czytać',
            declination: {
                past: {
                    ja_ż: 'uczyłam się',
                    ja_m: 'uczyłem się',
                    ty_ż: 'uczyłaś się',
                    ty_m: 'uczyłeś się',
                    on: 'uczył się',
                    ona: 'uczyła się',
                    ono: 'uczyło się',
                    my_nmo: 'uczyłyśmy się',
                    my_mo: 'uczyliśmy się',
                    wy_nmo: 'uczyłyście się',
                    wy_mo: 'uczyliście się',
                    oni: 'uczyli się',
                    one: 'uczyły się',
                },
                present: {
                    ja_ż: 'czytam',
                    ja_m: 'czytam',
                    ty_ż: 'czytasz',
                    ty_m: 'czytasz',
                    on: 'czyta',
                    ona: 'czyta',
                    ono: 'czyta',
                    my_nmo: 'czytamy',
                    my_mo: 'czytamy',
                    wy_nmo: 'czytacie',
                    wy_mo: 'czytacie',
                    oni: 'czytają',
                    one: 'czytają',
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
    toWant: {
        ua: {
            infinitive:'hotity',
            declination: {
                past: {
                    ja_ż: '',
                    ja_m: '',
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
                    ja_ż: 'hoczu',
                    ja_m: 'hoczu',
                    ty_ż: 'hocesz',
                    ty_m: 'hocesz',
                    on: 'hocze',
                    ona: 'hocze',
                    ono: 'hocze',
                    my_mo: 'hoczemo',
                    my_nmo: 'hoczemo',
                    wy_mo: 'hoczete',
                    wy_nmo: 'hoczete',
                    oni: 'hoczut',
                    one: 'hoczut',
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
            infinitive:'chcieć',
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
                    ja_ż: 'chcę',
                    ja_m: 'chcę',
                    ty_ż: 'chcesz',
                    ty_m: 'chcesz',
                    on: 'chce',
                    ona: 'chce',
                    ono: 'chce',
                    my_nmo: 'chcemy',
                    my_mo: 'chcemy',
                    wy_nmo: 'chcecie',
                    wy_mo: 'chcecie',
                    oni: 'chcą',
                    one: 'chcą',
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

    const keyList: string[]=[]
    for (const key in verbs) {
        if (Object.prototype.hasOwnProperty.call(verbs, key)) {
            keyList.push(key);
        }
    }

    const verb=verbs[rand(keyList)]
    const verb2=verbs[rand(verb.pl.infinitive==='być'?keyList.filter(el=>el!=='toBe'):keyList)]
    const jak=verb.pl.infinitive==='czytać'?'jak ':''

    const uaLatin = persons.filter(el=>{return el.pl===rightPerson})[0].ua + ' '+verb.ua.declination.present[person]+' '+jak+verb2.ua.infinitive
    const plLatin = rightPerson + ' ' + verb.pl.declination.present[person]+' '+jak+verb2.pl.infinitive
    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
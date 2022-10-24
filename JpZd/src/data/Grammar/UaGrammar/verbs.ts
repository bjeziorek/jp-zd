import { persons } from './dictionaryUa';
import transcription, { latinToCyrylic } from "../../../UaUtils/transcription";
import rand from "../../../utils/randomArrayElement";
import { getKeyList } from '../../../UaUtils/getKeyList';



interface VerbPersons {
    [key: string]: string,
}

interface Declination {
    past: VerbPersons,
    present: VerbPersons,
    future: VerbPersons
}


export interface UaVerb {
    ua: {
        infinitive: string,
        declination: Declination
    }
    pl: {
        infinitive: string,
        declination: Declination
    }

}

interface UaVerbs {
    [key: string]: UaVerb
}

export const uaVerbs: UaVerbs = {
    toBe: {
        ua: {
            infinitive: 'bity',
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
                future: {//present: {
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
                present: {//future: {
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
            infinitive: 'być',
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
                future: {//present: {
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
                present: {//future: {
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
    toHave: {
        ua: {
            infinitive: 'maty',
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
                    ja_ż: 'maju',
                    ja_m: 'maju',
                    ty_ż: 'majesz',
                    ty_m: 'majesz',
                    on: 'maje',
                    ona: 'maje',
                    ono: 'maje',
                    my_nmo: 'majemo',
                    my_mo: 'majemo',
                    wy_nmo: 'majete',
                    wy_mo: 'majete',
                    oni: 'majut^',
                    one: 'majut^',
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
            infinitive: 'mieć',
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
                    ja_ż: 'mam',
                    ja_m: 'mam',
                    ty_ż: 'masz',
                    ty_m: 'masz',
                    on: 'ma',
                    ona: 'ma',
                    ono: 'ma',
                    my_nmo: 'mamy',
                    my_mo: 'mamy',
                    wy_nmo: 'macie',
                    wy_mo: 'macie',
                    oni: 'mają',
                    one: 'mają',
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
        }
    },
    toDo: {
        ua: {
            infinitive: 'robyty',
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
                    ja_ż: 'roblju',
                    ja_m: 'roblju',
                    ty_ż: 'robysz',
                    ty_m: 'robysz',
                    on: 'robyt^',
                    ona: 'robyt^',
                    ono: 'robyt^',
                    my_nmo: 'robymo',
                    my_mo: 'robymo',
                    wy_nmo: 'robyte',
                    wy_mo: 'robyte',
                    oni: 'robljat^',
                    one: 'robljat^',
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
            infinitive: 'robić',
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
                    ja_ż: 'robię',
                    ja_m: 'robię',
                    ty_ż: 'robisz',
                    ty_m: 'robisz',
                    on: 'robi',
                    ona: 'robi',
                    ono: 'robi',
                    my_nmo: 'robimy',
                    my_mo: 'robimy',
                    wy_nmo: 'robicie',
                    wy_mo: 'robicie',
                    oni: 'robią',
                    one: 'robią',
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
        }
    },
    toThink: {
        ua: {
            infinitive: 'dumaty',
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
                    ja_ż: 'dumayu',
                    ja_m: 'dumaju',
                    ty_ż: 'dumajesz',
                    ty_m: 'dumajesz',
                    on: 'dumaje',
                    ona: 'dumaje',
                    ono: 'dumaje',
                    my_nmo: 'dumajemo',
                    my_mo: 'dumajemo',
                    wy_nmo: 'dumajete',
                    wy_mo: 'dumajete',
                    oni: 'dumajut^',
                    one: 'dumajut^',
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
            infinitive: 'myśleć',
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
                    ja_ż: 'myślę',
                    ja_m: 'myślę',
                    ty_ż: 'myślisz',
                    ty_m: 'myślisz',
                    on: 'myśli',
                    ona: 'myśli',
                    ono: 'myśli',
                    my_nmo: 'myślimy',
                    my_mo: 'myślimy',
                    wy_nmo: 'myślicie',
                    wy_mo: 'myślicie',
                    oni: 'myślą',
                    one: 'myślą',
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
        }
    },
    toGo: {
        ua: {
            infinitive: 'jty',
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
                    ja_ż: 'jdu',
                    ja_m: 'jdu',
                    ty_ż: 'jdy',
                    ty_m: 'jdy',
                    on: 'jde',
                    ona: 'jde',
                    ono: 'jde',
                    my_nmo: 'jdemo',
                    my_mo: 'jdemo',
                    wy_nmo: 'jdete',
                    wy_mo: 'jdete',
                    oni: 'jdut^',
                    one: 'jdut^',
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
            infinitive: 'iść',
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
                    ja_ż: 'idę',
                    ja_m: 'idę',
                    ty_ż: 'idziesz',
                    ty_m: 'idziesz',
                    on: 'idzie',
                    ona: 'idzie',
                    ono: 'idzie',
                    my_nmo: 'idziemy',
                    my_mo: 'idziemy',
                    wy_nmo: 'idziecie',
                    wy_mo: 'idziecie',
                    oni: 'idą',
                    one: 'idą',
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
        }
    },
    toCan: {
        ua: {
            infinitive: "moht'y",
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
                    ja_ż: 'możu',
                    ja_m: 'możu',
                    ty_ż: 'możesz',
                    ty_m: 'możesz',
                    on: 'może',
                    ona: 'może',
                    ono: 'może',
                    my_nmo: 'możemo',
                    my_mo: 'możemo',
                    wy_nmo: 'możete',
                    wy_mo: 'możete',
                    oni: 'możut^',
                    one: 'możut^',
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
            infinitive: 'móc',
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
                    ja_ż: 'mogę',
                    ja_m: 'mogę',
                    ty_ż: 'możesz',
                    ty_m: 'możesz',
                    on: 'może',
                    ona: 'może',
                    ono: 'może',
                    my_nmo: 'możemy',
                    my_mo: 'możemy',
                    wy_nmo: 'możecie',
                    wy_mo: 'możecie',
                    oni: 'mogą',
                    one: 'mogą',
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
        }
    },
    toLearn: {
        ua: {
            infinitive: 'wiwczaty',
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
            infinitive: 'uczyć się',
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
            infinitive: 'czytaty',
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
            infinitive: 'czytać',
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
            infinitive: 'chotity',
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
                    ja_ż: 'choczu',
                    ja_m: 'choczu',
                    ty_ż: 'chocesz',
                    ty_m: 'chocesz',
                    on: 'chocze',
                    ona: 'chocze',
                    ono: 'chocze',
                    my_mo: 'choczemo',
                    my_nmo: 'choczemo',
                    wy_mo: 'choczete',
                    wy_nmo: 'choczete',
                    oni: 'choczut^',
                    one: 'choczut^',
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
            infinitive: 'chcieć',
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

    const rightPerson = (() => {
        return person.replace(/_m$/, '').replace(/_ż$/, '').replace(/_mo$/, '').replace(/_mno$/, '')
    })()

    const keyList = getKeyList(uaVerbs)
    let verb2
    const verb = uaVerbs[rand(keyList)]
    if (verb.pl.infinitive === 'robić'
        || verb.pl.infinitive === 'mieć'
        || verb.pl.infinitive === 'robić'
        || verb.pl.infinitive === 'myśleć'
    ) {
        verb2 = {
            ua: { infinitive: '' },
            pl: { infinitive: '' }
        }
    } else {
        verb2 = uaVerbs[rand(verb.pl.infinitive === 'być' ? keyList
            .filter(el => el !== 'toBe')
            : keyList)]
    }

    let jak = verb.pl.infinitive === 'czytać' ? 'jak ' : ''

    const uaLatin = persons.filter(el => { return el.pl === rightPerson })[0].ua + ' ' + verb.ua.declination.present[person] + ' ' + jak + verb2.ua.infinitive
    const plLatin = rightPerson + ' ' + verb.pl.declination.present[person] + ' ' + jak + verb2.pl.infinitive
    return {
        uaLatin: uaLatin,
        uaCyrylic: transcription(uaLatin, latinToCyrylic),
        plLatin: plLatin,
        plCyrylic: transcription(plLatin, latinToCyrylic)
    }
}
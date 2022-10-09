import { jpVerbFormsPool, verbs as vrb } from './../../../dictionary';
import { verbFormJp } from "../../../dictionary";
import DataType from '../../../../types/DataType.model';
import rand from '../../../../utils/randomArrayElement';


export function verbs2(theme:string): DataType {
    let verb =rand( vrb.actions)
    let v =verb.jp.dictionaryForm

    interface N{ [key:string]:string}
    interface T{ [key:string]:N}
    interface P{ [key:string]:T}
    const verbDeclinationJpPool:P = {
        polite: {
            past: {
                positive: verbFormJp(v, jpVerbFormsPool.mashita),
                negative: verbFormJp(v, jpVerbFormsPool.masendeshita),
            },
            present: {
                positive: verbFormJp(v, jpVerbFormsPool.masu),
                negative: verbFormJp(v, jpVerbFormsPool.masen),
            },
            future: {
                positive: verbFormJp(v, jpVerbFormsPool.masu),
                negative: verbFormJp(v, jpVerbFormsPool.masen),
            }
        },
        simple: {
            past: {
                positive: verbFormJp(v, jpVerbFormsPool.ta),
                negative: verbFormJp(v, jpVerbFormsPool.katta),
            },
            present: {
                positive: v,
                negative: verbFormJp(v, jpVerbFormsPool.nai),
            },
            future: {
                positive: v,
                negative: verbFormJp(v, jpVerbFormsPool.nai),
            }
        }
    }

   // const p =rand( ['polite', 'simple'])as string
   // const t =rand( ['past', 'present', 'future'])
   // const n =rand(['positive', 'negative'])

    const p ='simple'
    const t = 'present'
    const n = 'negative'


    return {
        romaji: verbDeclinationJpPool[p][t][n],
        meaning: verb.pl.infinitive + ' forma: '+p+", "+t+', '+n
    }

}

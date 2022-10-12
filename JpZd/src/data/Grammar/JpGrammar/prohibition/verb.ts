import { Theme } from './../../../../types/Theme.model';
import { verbs, jpVerbFormsPool, verbFormJp } from '../../../dictionary';
import { VerbStructure } from '../../../../types/Verb.model';
import rand from "../../../../utils/randomArrayElement"

export default function verb(theme:Theme){
    return(()=>{
        const verb:VerbStructure=rand(verbs.actions)
        return{
            jp:verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.ikemasen),
            pl:'Nie wolno '+verb.pl.infinitive
        }
    })()
}
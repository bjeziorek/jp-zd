import { VerbStructure } from './../../../../types/Verb.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import rand from "../../../../utils/randomArrayElement";

export default function verb(theme:string){
    return(()=>{
        const verb:VerbStructure = rand(verbs[theme])
        return{
            jp:verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.nakute)+'-mo ii desu',
            pl:'Nie trzeba '+verb.pl.infinitive
        }
    })()
}
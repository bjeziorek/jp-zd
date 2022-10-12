import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export default function verb(theme:Theme){
    return(()=>{
        const verb:VerbStructure = rand(pickTheme('v',theme))
        return{
            jp:verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.nakute)+'-mo ii desu',
            pl:'Nie trzeba '+verb.pl.infinitive
        }
    })()
}
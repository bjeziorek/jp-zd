import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { verbFormJp, jpVerbFormsPool } from './../../../dictionary';
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export default function verb(theme:Theme){
    return(()=>{
        const verb:VerbStructure = rand(pickTheme('v',theme))
        return{
            jp:verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.te)+'-mo ii desu',
            pl:'Wolno '+verb.pl.infinitive
        }
    })()
}
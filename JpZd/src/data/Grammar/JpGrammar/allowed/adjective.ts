import { AdjectiveStructure } from './../../../../types/Adjective.model';
import rand from "../../../../utils/randomArrayElement";
import { adjectives } from '../../../dictionary';

export default function adjective(theme:string){
    return(()=>{
        const adjective:AdjectiveStructure = rand(adjectives.filter(el=>{return el.jp.match(/i$/)}))
        return{
            jp:adjective.jp.replace(/i$/,'kute')+'-mo ii desu',
            pl:'Może być '+adjective.pl
        }
    })()
}
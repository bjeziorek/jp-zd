import { adjectives } from './../../../dictionary';
import rand from "../../../../utils/randomArrayElement"

export default function adjective(theme:string){
    return(()=>{
        const adjective=rand(adjectives.filter(el=>{return el.jp.match(/i$/)}))
        return{
            jp:adjective.jp.replace(/i$/,'kunakute-mo ii desu'),
            pl:'Nie musi być '+adjective.pl
        }
    })()
}
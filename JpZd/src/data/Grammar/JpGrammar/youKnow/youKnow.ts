import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function youKnow(theme:Theme):DataType{

    const who:NounStructure = rand(pickTheme('n',theme))
    const tamten=(()=>{
        switch(who.plGender){
            case 'm':return 'tamten'
            case 'ż':return 'tamta'
            case 'n':return 'tamto'
            case 'mo':return 'tamci'
            case 'nmo':return 'tamte'
            default:
                console.log('unknown gender: ',who.plGender)
                return 'ten'
        }
    })()

    return{
        romaji:'Ano '+who.jp+'-wa dare-ka shitte imasuka?',
        meaning:'Czy wiesz kim jest ' +tamten+' '+who.pl.M+'?'
    }
}
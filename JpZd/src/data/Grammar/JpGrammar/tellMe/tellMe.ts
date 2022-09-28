import DataType from "../../../../types/DataType.model";
import { pickVerb } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function tellMe(theme:string):DataType{
    const verb = rand(pickVerb('actions'))

    return{
        romaji:'Dare-ga '+verb.jp.dictionaryForm+'-ka oshiete kudasai',
        meaning:'Powiedz mi kto będzie '+verb.pl.infinitive
    }
}
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function tellMe(theme:Theme):DataType{
    const verb = rand(pickTheme('v','actions'))

    return{
        romaji:'Dare-ga '+verb.jp.dictionaryForm+'-ka oshiete kudasai',
        meaning:'Powiedz mi kto będzie '+verb.pl.infinitive
    }
}
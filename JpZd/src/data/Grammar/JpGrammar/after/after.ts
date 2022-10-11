import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { afterNoun } from "./afterNoun";
import { afterVerb } from "./afterVerb";

export function after(theme:string):DataType{

    const question:DataType=rand([afterNoun(theme),afterVerb(theme)])

    return{
        romaji:question.romaji,
        meaning:question.meaning
    }
}
import { greetings as greets } from './../../../dictionary';
import DataType from "../../../../types/DataType.model"
import rand from "../../../../utils/randomArrayElement"

export function greetings(theme:string):DataType{
    const gr=rand(greets)
    return{
        romaji:gr.jp,
        meaning:gr.pl
    }
}
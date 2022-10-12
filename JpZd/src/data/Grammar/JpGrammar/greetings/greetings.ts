import { Theme } from './../../../../types/Theme.model';
import { greetings as greets } from './../../../dictionary';
import DataType from "../../../../types/DataType.model"
import rand from "../../../../utils/randomArrayElement"

export function greetings(theme:Theme):DataType{
    const gr=rand(greets)
    return{
        romaji:gr.jp,
        meaning:gr.pl
    }
}
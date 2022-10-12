import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { doIt } from "./doIt";
import { please } from "./please";

export function request(theme:Theme):DataType{

    const req:DataType=rand([
        doIt(theme),
        please(theme)
    ])
    return{
        romaji:req.romaji,
        meaning:req.meaning
    }
}
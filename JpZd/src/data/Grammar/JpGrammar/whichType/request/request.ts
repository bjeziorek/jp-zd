import DataType from "../../../../../types/DataType.model";
import rand from "../../../../../utils/randomArrayElement";
import { doIt } from "./doIt";
import { please } from "./please";

export function request(theme:string):DataType{

    const req:DataType=rand([
        doIt(theme),
        please(theme)
    ])
    return{
        romaji:req.romaji,
        meaning:req.meaning
    }
}
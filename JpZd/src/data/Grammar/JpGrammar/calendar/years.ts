import DataType from "../../../../types/DataType.model"
import { convertNumberToText } from "../../../numbers"

export function years():DataType{
    const year=Math.floor(Math.random()*10000)

    console.log(year, year.toString().slice(0,1))
    let yearJp=convertNumberToText(year,'nen')
   
    return{
        romaji:yearJp,
        meaning:year+' r.'
    }
}
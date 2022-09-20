import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function youKnowIsAorB(theme:string):DataType{

    const what=rand(pickTheme(theme));

    return{
        romaji:'Ashita '+what.jp+'-ga aru-ka dou-ka shitte imasu-ka?',
        meaning:'Czy wiesz czy jutro jest '+what.pl.M+' czy nie?'
    }
}
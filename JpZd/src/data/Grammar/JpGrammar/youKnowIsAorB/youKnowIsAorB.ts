import { NounStructure } from './../../../../types/Noun.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function youKnowIsAorB(theme:Theme):DataType{

    const what:NounStructure=rand(pickTheme('n',theme));

    return{
        romaji:'Ashita '+what.jp+'-ga aru-ka dou-ka shitte imasu-ka?',
        meaning:'Czy wiesz czy jutro jest '+what.pl.M+' czy nie?'
    }
}
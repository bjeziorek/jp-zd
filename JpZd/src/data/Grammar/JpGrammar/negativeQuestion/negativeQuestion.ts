import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function negativeQuestion(theme:string):DataType{

    const who = rand(pickTheme(theme))
    const question={
        jp:'ashita '+who.jp+'-ga imasen-ka?',
        pl:'jutro nie będzie '+who.pl.D+'?'
    }
    const answer = Math.random()>0.5
    ?{
        jp:'hai, imasen',
        pl:'nie, nie będzie'
    }
    :{
        jp:'iee, imasu',
        pl:'nie, będzie'
    }

    return {
        romaji:question.jp+' '+answer.jp,
        meaning:question.pl+' '+answer.pl,
    }
}
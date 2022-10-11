import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import { verbs } from "../../../dictionary";

export function afterNoun(theme:string):DataType{

    const noun:NounStructure = rand(pickTheme('languages'))
    const who:NounStructure=rand(pickTheme('professions'))
    const what:NounStructure=rand(pickTheme(theme))
    const verb:VerbStructure=rand(verbs.move)
    return{
        romaji:who.jp+'-wa '+noun.jp+'-no ato, '+what.jp+'-e '+verb.jp.dictionaryForm,
        meaning:who.pl.M+' po '+noun.pl.Msc+' '+verb.pl.os3+' do '+what.pl.D
    }
}
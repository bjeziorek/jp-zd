import { NounStructure } from './../../../../types/WordList.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { verbFormJp, verbs, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function moveUntil(theme:string):DataType{
    const place:NounStructure = rand(pickTheme('places'))
    const verb:VerbStructure=rand(verbs.move)
    return{
        romaji:place.jp+'-made-e '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.nasai),
        meaning:verb.pl.rozkazujący2os+ ' aż do '+place.pl.D
    }
}
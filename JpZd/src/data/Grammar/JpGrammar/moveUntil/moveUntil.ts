import { Theme } from './../../../../types/Theme.model';
import { NounStructure } from '../../../../types/Noun.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { verbFormJp, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function moveUntil(theme:Theme):DataType{
    const place:NounStructure = rand(pickTheme('n','places'))
    const verb:VerbStructure=rand(pickTheme('v','move'))
    return{
        romaji:place.jp+'-made-e '+verbFormJp(verb.jp.dictionaryForm,jpVerbFormsPool.nasai),
        meaning:verb.pl.rozkazujący2os+ ' aż do '+place.pl.D
    }
}
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { Theme } from './../../../../types/Theme.model';
import { ktoryConj } from './../../../dictionary';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import DataType from '../../../../types/DataType.model';

export function thingWhich(theme: Theme): DataType {
    const adj:AdjectiveStructure = rand(pickTheme('a','all'))
    const animal:NounStructure = rand(pickTheme('n',theme))
    const verb:VerbStructure = rand(pickTheme('v','actions').filter(oVerbFilter))
    const noun:NounStructure = rand(pickTheme('n','items'))
    return {
        romaji: animal.jp + '-ga kyou ' + verb.jp.dictionaryForm + ' ' + noun.jp + '-wa ' + adj.jp,
        meaning: noun.pl.M + ', ' + ktoryConj(noun.plGender) + ' dzisiaj ' + verb.pl.os3 + ' ' + animal.pl.M + ' jest ' + adj.pl
    }
}
import { oVerbFilter } from '../../../../utils/filters/oVerbFilter';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function sthWhich(theme:Theme):DataType{
    const adj:AdjectiveStructure=rand(pickTheme('a','all'))  
    const who:NounStructure = rand(pickTheme('n',theme))
    const verb:VerbStructure = rand(pickTheme('v','actions').filter(oVerbFilter))
    return {
        romaji: who.jp + '-ga kyou ' + verb.jp.dictionaryForm + '-koto-wa ' + adj.jp+'-koto desu',
        meaning: 'To, co ' +verb.pl.os3+ ' dzisiaj ' + who.pl.M + ' jest ' + adj.pl
    }

}
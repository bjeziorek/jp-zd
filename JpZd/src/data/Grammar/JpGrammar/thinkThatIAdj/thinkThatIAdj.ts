import { AdjectiveStructure } from './../../../../types/Adjective.model';
import { iAdjFilter } from './../../../../utils/filters/iAdjFilter';
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function thinkThatIAdj(theme:Theme):DataType{
    const doingWhat:VerbStructure = rand(pickTheme('v','actions'))
    const iAdj:AdjectiveStructure = rand(pickTheme('a','all').filter(iAdjFilter))

    return{
        romaji:doingWhat.jp.dictionaryForm+'-koto-wa '+iAdj.jp+'-to omoimasu',
        meaning:'Myślę, że '+doingWhat.pl.imieslowNiedokonany+' jest '+iAdj.pl
    }
}
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function afterNoun(theme:Theme):DataType{

    const noun:NounStructure = rand(pickTheme('n','languages'))
    const who:NounStructure=rand(pickTheme('n','professions'))
    const what:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v','move'))
    return{
        romaji:who.jp+'-wa '+noun.jp+'-no ato, '+what.jp+'-e '+verb.jp.dictionaryForm,
        meaning:who.pl.M+' po '+noun.pl.Msc+' '+verb.pl.os3+' do '+what.pl.D
    }
}
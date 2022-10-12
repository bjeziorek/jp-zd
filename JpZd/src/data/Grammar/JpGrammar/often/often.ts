import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function often(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const what:NounStructure=rand(pickTheme('n','items'))
    const oVerb:VerbStructure=rand(verbs.actions.filter(el=>{return el.jp.particle.includes('o')}))
    return{
        romaji:who.jp+'-wa yoku '+what.jp+'-o '+oVerb.jp.dictionaryForm,
        meaning:who.pl.M+' często '+ oVerb.pl.os3 +' '+what.pl.B
    }
}
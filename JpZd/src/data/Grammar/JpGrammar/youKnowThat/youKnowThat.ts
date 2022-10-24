import { NounStructure } from './../../../../types/Noun.model';
import DataType from '../../../../types/DataType.model';
import { Theme } from './../../../../types/Theme.model';
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';
import { VerbStructure } from '../../../../types/Verb.model';
import { verbFormJp } from '../../../dictionary';
export function youKnowThat(theme:Theme):DataType{
    const who:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v',['actions','move']))
    return{
        romaji:'Anata-wa '+who.jp+'-ga '+verbFormJp(verb.jp.dictionaryForm,'ta')+'-koto-o shitte imasuka?',
        meaning:'Czy wiesz, że '+who.pl.M+' '+verb.pl.os3+'ł?'
    }
}
import { NounStructure } from './../../../../types/Noun.model';
import { VerbStructure } from './../../../../types/Verb.model';
import DataType from "../../../../types/DataType.model";
import { Theme } from "../../../../types/Theme.model";
import rand from '../../../../utils/randomArrayElement';
import { pickTheme } from '../../../../utils/pickTheme';

export function walk(theme:Theme):DataType{
    const verb:VerbStructure=rand(pickTheme('v','move').filter((el:VerbStructure)=>{return el.jp.particle.includes('o')}))
    const who:NounStructure=rand(pickTheme('n',theme))
    const where:NounStructure=rand(pickTheme('n','places'))
    const hour=Math.ceil(Math.random()*12)
    return {
        romaji:hour+'-ji-ni '+who.jp+'-wa '+where.jp+'-o '+verb.jp.dictionaryForm,
        meaning:'O godzinie '+hour+':00 ' +who.pl.M+' '+verb.pl.os3+' po '+where.pl.Msc
    }
}
import { Theme } from './../../../../types/Theme.model';
import { VerbStructure } from './../../../../types/Verb.model';
import { NounStructure } from './../../../../types/Noun.model';
import { TimeStructure } from './../../../../types/Tense.model';
import { verbFormJp, jpVerbFormsPool } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function probably(theme:Theme):DataType{

    const when:TimeStructure = rand(pickTheme('t','future'))
    const who:NounStructure=rand(pickTheme('n',theme))
    const verb:VerbStructure=rand(pickTheme('v','move'))
    const probability:{jp:string,pl:string} = rand([{pl:'chyba',jp:'tabun'},{pl:'na pewno',jp:'kitto'},{pl:'prawdopodobnie',jp:'osora'}])
    const answer:{jp:string,pl:string}=Math.random()>0.5
    ?{
        jp:'Hai, '+probability.jp+' '+ verb.jp.dictionaryForm as string +'-de shou.',
        pl:'Tak, '+probability.pl+' '+verb.pl.os3 as string+'.'
    }
    :{
        jp:'Iee, '+probability.jp+' '+ verbFormJp( verb.jp.dictionaryForm,jpVerbFormsPool.nai) as string +'-de shou.',
        pl:'Nie, '+probability.pl+' nie '+verb.pl.os3 as string+'.'
    }
    return {
        romaji:who.jp+'-wa '+when.jp+' '+verb.jp.dictionaryForm+ '-de shou-ka? '+answer.jp,
        meaning:who.pl.M+' [chyba] '+verb.pl.os3+' '+when.pl+'? '+answer.pl
    }
}

import { verbs } from './../../../dictionary';
import DataType from "../../../../types/DataType.model";
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";

export function ACanEtcButBCantEtc(theme:string):DataType{
    const verb = rand([
        {jp:['dekimasu','dekimasen'],pl:'potrafi'},
        {jp:['jouzu desu','heta desu'],pl:'jest dobry w'},
        {jp:['wakarimasu','wakarimasen'],pl:'rozumie jak'},
    ])
    const verb1 = rand(verbs.actions)
    const verb2 = rand(verbs.actions)
    const who1 = rand(pickTheme(theme))
    
    return{
        romaji:who1.jp+'-wa '+verb1.jp.dictionaryForm+'-koto-wa '+verb.jp[0]+'-ga '+verb2.jp.dictionaryForm+'-koto-wa '+verb.jp[1],
        meaning:who1.pl.M+' '+verb.pl +' '+verb1.pl.infinitive+', ale nie '+verb.pl+' '+verb2.pl.infinitive
    }
}
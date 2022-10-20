import { NounStructure } from './../../../../types/Noun.model';
import DataType from "../../../../types/DataType.model"
import { Theme } from "../../../../types/Theme.model"
import { VerbStructure } from "../../../../types/Verb.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function wantToDoNow(theme: Theme): DataType {

    function taiImasuForm(verb: string) {
        //exceptions
        if (verb === 'suru') {
            return 'shitagatte imasu'
        }


        if (verb.match(/iru$|eru$/)) {
            return verb.slice(0, -2) + 'tagatte imasu'
        } else {
            return verb.slice(0, -1) + 'itagatte imasu'
        }

    }

    const who:NounStructure=rand(pickTheme('n',theme))

    const verb: VerbStructure = rand(pickTheme('v', 'actions'))
    return {
        romaji:who.jp+'-wa '+taiImasuForm(verb.jp.dictionaryForm),
        meaning: who.pl.M+' chce [w tej chwili] ' + verb.pl.niedokonany
    }
}
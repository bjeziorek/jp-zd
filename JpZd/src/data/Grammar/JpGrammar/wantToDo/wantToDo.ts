import DataType from "../../../../types/DataType.model"
import { Theme } from "../../../../types/Theme.model"
import { VerbStructure } from "../../../../types/Verb.model"
import { pickTheme } from "../../../../utils/pickTheme"
import rand from "../../../../utils/randomArrayElement"

export function wantToDo(theme: Theme): DataType {

    function taiForm(verb: string) {
        if (verb === 'suru') {
            return 'shitai'
        }


        if (verb.match(/iru$|eru$/)) {
            return verb.slice(0, -2) + 'tai'
        } else {
            return verb.slice(0, -1) + 'itai'
        }

    }

    const verb: VerbStructure = rand(pickTheme('v', 'actions'))
    return {
        romaji:taiForm(verb.jp.dictionaryForm),
        meaning: 'Chcę ' + verb.pl.dokonany
    }
}
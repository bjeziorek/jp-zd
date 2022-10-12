import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import adjective from "./adjective";
import noun from "./noun";
import verb from "./verb";

export function allowed(theme:Theme):DataType{

    const type = Math.random() > 0.33 ? 'adj' : (Math.random() > 0.5 ? 'verb' : 'noun')
    const answer = (() => {
        switch (type) {
            case 'adj': return adjective('all')
            case 'noun': return noun(theme)
            case 'verb': return verb('actions')
        }
    })()
    return {
        romaji: answer.jp,
        meaning: answer.pl
    }
}
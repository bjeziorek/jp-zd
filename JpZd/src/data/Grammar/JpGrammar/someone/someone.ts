import { Theme } from './../../../../types/Theme.model';
import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { pickTheme } from '../../../../utils/pickTheme';

export function someone(theme: Theme): DataType {

    const who = rand(pickTheme('n',theme))
    const thing = rand(pickTheme('n','items'))
    const answer = Math.random() > 0.5
        ? {
            jp: 'Hai, dare-ni-demo agemasu.',
            pl:'Tak, da komukolwiek.'
        }
        : {
            jp: 'Iee, dare-ni-mo agemasu.',
            pl:'Nie, nie da nikomu.'
        }
    return {
        romaji: who.jp+'-wa '+thing.jp+'-o dare-ka agemasuka? '+answer.jp,
        meaning: who.pl.M+' da komuś ' + thing.pl.B + '? '+answer.pl
    }
}
import { adjectives, ktoryConj, verbs } from './../../../dictionary';
import { pickTheme } from "../../../../utils/pickTheme";
import rand from "../../../../utils/randomArrayElement";
import DataType from '../../../../types/DataType.model';

export function thingWhich(theme: string): DataType {
    const adj = rand(adjectives)
    const animal = rand(pickTheme(theme))
    const verb = rand(verbs.actions.filter(el => { return el.jp.particle.includes('o') }))
    const noun = rand(pickTheme('items'))
    return {
        romaji: animal.jp + '-ga kyou ' + verb.jp.dictionaryForm + ' ' + noun.jp + '-wa ' + adj.jp,
        meaning: noun.pl.M + ', ' + ktoryConj(noun.plGender) + ' dzisiaj ' + verb.pl.os3 + ' ' + animal.pl.M + ' jest ' + adj.pl
    }
}
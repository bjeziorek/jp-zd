import DataType from "../../../../types/DataType.model";
import rand from "../../../../utils/randomArrayElement";
import { adj } from "./adj";
import { aru } from "./aru";
import { from } from "./from";
import { inPlace } from "./inPlace";
import { oVerb } from "./oVerb";
import { toPlace } from "./toPlace";
import { wakaru } from "./wakaru";
import { when } from "./when";
import { withSb } from "./withSb";

export function but(theme: string): DataType {
    const sentence:DataType = rand([
        adj(theme),
        aru(theme),
        from(theme),
        inPlace(theme),
        toPlace(theme),
        oVerb(theme),
        wakaru(theme),
        when(theme),
        withSb(theme),
    ])
    return {
        romaji: sentence.romaji,
        meaning: sentence.meaning
     }
}
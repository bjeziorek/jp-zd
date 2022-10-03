import { VerbStructure } from './../../../../types/Verb.model';
import rand from "../../../../utils/randomArrayElement";
import { verbs } from "../../../dictionary";

export function actions():VerbStructure{
    return rand(verbs.actions)
}
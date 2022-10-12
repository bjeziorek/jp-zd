import { TimeThemes } from './TimeThemes';
import { VerbThemes } from './VerbThemes';
import { NounThemes } from './NounThemes';
import { AdjectiveThemes } from './AdjectiveThemes';
export type Theme=NounThemes|Array<NounThemes>|
VerbThemes|Array<VerbThemes>|
AdjectiveThemes|Array<AdjectiveThemes>|
TimeThemes|Array<TimeThemes>
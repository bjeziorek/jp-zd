import { Case } from "./Case.model"
import { Collocations } from "./Noun.model"
import Preposition from "./Preposition.model"

export interface Word{
    jp:string,
    pl:string,
    type:string,
    tags:Array<string>
    options:Verb|Noun|Adjective|Time
}

interface Verb{
    jp:{
        particle: Array<string>
    },
    pl:{
    isPerfective: boolean //dokonany
    isReflexive: boolean //zwrotny
    isNonReflexive: boolean 
    prepositions: Array<Preposition>
    rozkazujący?: string
    rozkazujący2os?: string
    imieslowNiedokonany?: string
    niedokonany?: string
    dokonany?: string
    os3?: string
    },
    otherData:{
        
    }
}

interface Noun{
    jp:{

    },
    pl:{
    cases: Case,
    counter: string,
    plGender: string,
    isAlive: boolean,
    isHuman: boolean,
    tags: Array<string>,
    collocations?: Array<Collocations>
    },
    otherData:{
        
    }
}

interface Adjective{
    jp:{
        noun:string
    },
    pl:{
        noun:string
    },
    otherData:{
        
    }

}

interface Time{
    jp:{

    },
    pl:{

    },
    otherData:{

    }
}
import { AdjectiveStructure } from './../types/Adjective.model';
import { adjectives, verbs, time } from './../data/dictionary';
import { VerbStructure } from './../types/Verb.model';
import { NounStructure } from './../types/Noun.model';
import { Theme } from './../types/Theme.model'
import { nouns } from "../data/dictionary"

export function pickTheme(grammarElement:'a'|'n'|'v'|'t',theme:Theme){
    
        switch(grammarElement){
            case 'a': 
            if(typeof theme==='string'){
                return adjectives[theme]
            }else{
                const arr:AdjectiveStructure[]=[]
                theme.forEach(element => {
                    arr.concat(adjectives[element])
                })
                return arr
            }
                   
          case 'n': 
            if(typeof theme==='string'){
                return nouns[theme]
            }else{
                const arr:NounStructure[]=[]
                theme.forEach(element => {
                    arr.concat(nouns[element])
                })
                return arr
            }
                    
            case 'v': 
            if(typeof theme==='string'){
                return verbs[theme]
            }else{
                const arr: VerbStructure[]=[]
                theme.forEach(element => {
                    arr.concat(verbs[element])
                })
                return arr
            }
           
             case 't':
            if(typeof theme==='string'){
                return time[theme]
            }else{
                const arr:any[]=[]
                theme.forEach(element => {
                    arr.concat(time[element])
                })
                return arr
            }
           
        }
    
    
}
